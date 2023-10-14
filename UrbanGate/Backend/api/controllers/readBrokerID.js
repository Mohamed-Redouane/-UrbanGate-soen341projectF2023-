import User from '../models/users.js'

export default async function readBrokerID (req, res) {
    
try {

    const { _id } = req.params;
    const response = await User.findById({_id});
    console.log("yes");
    return res.status(200).json(response);
    
}
catch (Exception) {
    console.log("no");
    res.status(500).json({
        type: "error",
        message: "Error in reading the broker's ID!",
        error: Exception,
      });
}
}