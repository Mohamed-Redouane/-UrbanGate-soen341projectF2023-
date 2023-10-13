import User from '../models/users.js';

export default async function updateBroker(req, res) {
   
  
    
    try {
        
        const user = await User.findById(req.body.userID);
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;

        await user.save();
        console.log("USER UPDATED");
    
        return res.status(200).json({
            type: "success",
            message: "User signed in successfully!",
            //accessToken,
          });
    
    } //await because its a .save is a promise

       
            

    catch (Exception) {
        console.log("USER ALREADY EXISTS");
        return res.status(401).json({message:"Account already exists"});
    
    }
}