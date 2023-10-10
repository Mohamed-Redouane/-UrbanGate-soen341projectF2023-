import User from '../models/users.js';

export default async function createUser(req) {
    
    let user = new User({name: req.body.name, email: req.body.email, password: req.body.password, role: req.body.role})
    try {
        await user.save();
        console.log("USER CREATED")} //await because its a .save is a promise
    catch (Exception) {
        console.log("USER ALREADY EXISTS");}
}