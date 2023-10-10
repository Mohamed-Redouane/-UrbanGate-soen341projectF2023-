import User from '../models/users.js';

export default async function signIn(req,res) {
    try{
    const { email, password } = req.body;
    console.log("Received sign-in request with email:", email);
    const user = await User.findOne({ email}); //look for the email, if it does not exist enter if statement

    if(!user){ //user is not found as email does not match in the database
        return res.status(401).json({message:"Account does not exist"});
    }

    const passwordCheck = await compare(password, user.password); //compares the password from the request with the password of the user
    if (!passwordCheck){
        return res.status(401).json({ message: "Incorrect password" });
    }

    const accessToken = createAccessToken(user._id); // if password is correct, create the tokens
    const refreshToken = createRefreshToken(user._id);
    
    user.refreshtoken = refreshToken;  // put refresh token in database
    await user.save();

    sendRefreshToken(res, refreshToken);      //send the response
    sendAccessToken(req, res, accessToken);

}catch (error) {
    res.status(500).json({
      type: "error",
      message: "Error signing in!",
      error,
    });
  }
}