import User from '../models/users.js' 

export default async function manageBrokers(req, res) {

  
    const user = await User.findById(req.body.userID);
    if (!user) {return res.json({popup: "NOT SIGNED IN",});}
    try {
      if (user.role == "admin") {
      const response = await User.find({role: "broker"});
      return res.json({
        response: response,
        popup: "Good"});
      } 
      else {
        return res.json({popup:"Bad"});
      }
    }
    catch (Err) {
        return res.json(Err);
    } 
}