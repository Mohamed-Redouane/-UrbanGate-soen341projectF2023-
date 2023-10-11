import User from '../models/users.js';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
    return jwt.sign({_id},'SECRET',{expiresIn: '1d'}) //login for 1 day then expire
  }

export default async function signIn(req,res) {
    try{
    const { email, password } = req.body;
    console.log("Received sign-in request with email:", email);
    const user = await User.findOne({ email}); //look for the email, if it does not exist enter if statement

    if(!user){ //user is not found as email does not match in the database
        console.log("User not found with email:", email);
        return res.status(401).json({message:"Account does not exist"});
    }
      console.log("User found with email:", email);
    

    const passwordCheck = await User.findOne({password}); //compares the password from the request with the password of the user
    if (!passwordCheck){
        console.log("Incorrect password for user with email:", email);
        return res.status(402).json({ message: "Incorrect password" });
    }
      console.log("Password matches for user with email:", email);
      const token = createToken(user._id)
      console.log(user._id);
    
  
   // const accessToken = createAccessToken(user._id); // if password is correct, create the tokens
   // const refreshToken = createRefreshToken(user._id);
  
  //  user.refreshtoken = refreshToken;  // put refresh token in database
   

  // await user.save();

  //  sendRefreshToken(res, refreshToken);      //send the response
    //sendAccessToken(req, res, accessToken);

  return res.status(200).json({
    type: "success",
    message: "User signed in successfully!",
    userID: user._id, token
  });
    

}catch (error) {
    res.status(500).json({
      type: "error",
      message: "Error signing in!",
      error,
    });
  }
}