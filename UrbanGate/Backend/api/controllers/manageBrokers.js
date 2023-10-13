import User from '../models/users.js' 

export default async function manageBrokers(req, res) {

    const user = await User.findById(req.body.userID);
    if (!user) {console.log("NOT EVEN SIGNED IN"); return res.status(500).json({
        type: "error",
        message: "NOT SIGNED IN",
      });}
    if (user.role == "admin") {

        
    try {




            const response = await User.find({role: "broker"});
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