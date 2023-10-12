import Property from '../models/properties.js'
import User from '../models/users.js' 

export default async function manageProperties(req, res) {

    console.log(req.body);

    const user = await User.findById(req.body.userID);
    if (!user) {console.log("NOT EVEN SIGNED IN"); return res.status(500).json({
        type: "error",
        message: "NOT SIGNED IN",
      });}
    if (user.role == "broker") {

        
    try {




            const response = await Property.find({broker: user._id});
            console.log(response);
            return res.status(200).json(response);
           
    } 
    catch (Exception) {
        return res.status(500).json({
        type: "error",
        message: "Error signing in!",
        error,
      });
    } 
        res.json()}

    else {
        return res.status(450).json({
            type: "error",
            message: "NOT A BROKER",
          });
        console.log("NOT A BROKER");
    }

}