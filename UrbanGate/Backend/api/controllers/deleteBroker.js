import User from '../models/users.js';

export default async function deleteBroker(req, res) {
   
  
    
    try {
        const { _id } = req.params;
        await User.deleteOne({_id});

        console.log("USER DELETED");
    
        return res.status(200).json({
            type: "success",
            message: "User deleted successfully!",
            //accessToken,
          });
    
    } //await because its a .save is a promise

       
            

    catch (Exception) {
        console.log("USER NOT FOUND");
        return res.status(401).json({message:"Account not found"});
    
    }
}