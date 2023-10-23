import User from '../models/users.js'

export default async function checkUser(req, res){
    try {
        const user = await User.findById(req.body.userID);
        return res.json(user.role);
    } 
    catch (err) { //catches the error at "user.role" if user is found to be null
        return res.json("NONE");
    }
}