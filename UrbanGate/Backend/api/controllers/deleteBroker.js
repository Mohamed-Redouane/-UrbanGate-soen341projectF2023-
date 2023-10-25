import User from '../models/users.js';
import Property from '../models/properties.js';

export default async function deleteBroker(req, res) {
    try {
        const { _id } = req.params;
        const user = await User.findById(_id);
        const properties = user.ownedProperties;
        properties.forEach(async p => {
             await Property.findByIdAndDelete(p._id);
        });
        await User.deleteOne({_id});
        console.log("USER DELETED");
        return res.status(200).json({popup: "User deleted successfully!",});
    
    }
    catch (Exception) {
        console.log("USER NOT FOUND");
        return res.status(401).json({message:"Account not found"});
    }
}