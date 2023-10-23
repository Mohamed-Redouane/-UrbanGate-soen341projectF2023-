import User from '../models/users.js';
/*
* Receives Sign-in request from User
* Sends an object containing the appropriate message
* Sends userID if success
* I followed a guide:
* https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 50:12
*/
export default async function signIn(req, res) {
  try { //https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s 1:32:01
    const email = req.body.email;
    const password = req.body.password;
    console.log("Received sign-in request with email:", email);
    const user = await User.findOne({ email }); //look for the email, if it does not exist enter if statement
    if (!user) { //user is not found as email does not match in the database
      console.log("User not found with email:", email);
      return res.json({ popup: "Account does not exist" });
    }
    if (password !== user.password) {
      return res.json({popup: "Incorrect password"});
    }
    return res.json({
      popup: "User signed in successfully!",
      userID: user._id, //https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 1:15:25
    });
  }
  catch (err) { //https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s 1:32:01
    res.json(err); 
  }
}