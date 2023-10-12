import User from '../models/users.js';
import jwt  from 'jsonwebtoken';

const createToken = (_id) => {
return jwt.sign({_id},'SECRET',{expiresIn: '1d'}) //login for 1 day then expire
}

export default async function createUser(req, res) {
    
    let user = new User({name: req.body.name, email: req.body.email, password: req.body.password, role: req.body.role})
    try {
        await user.save();
        console.log("USER CREATED");
        const token = createToken(user._id)
    
        return res.status(200).json({
            type: "success",
            message: "User signed in successfully!",
            user, token
            //accessToken,
          });
    
    } //await because its a .save is a promise

       
            

    catch (Exception) {
        console.log("USER ALREADY EXISTS");
        return res.status(401).json({message:"Account already exists"});
    
    }
}