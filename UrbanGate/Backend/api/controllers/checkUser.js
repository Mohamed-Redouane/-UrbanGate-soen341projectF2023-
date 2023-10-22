import User from '../models/users.js'

export default async function checkUser(req, res){

    const user = await User.findById(req.body.userID);
    console.log(user);
    try{
        if(user.role == "broker"){
            console.log("yes");
            return res.status(200).json("broker");
        }else if(user.role == "admin"){
            return res.status(200).json("admin");
        }
        else{
            console.log("no but signed in");
            return res.status(200).json(user.role);
        }
    } catch(Exception){
        console.log("no");
        return res.status(500).json("no");
    }
   
}