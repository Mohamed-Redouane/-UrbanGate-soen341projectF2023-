import User from '../models/users.js'
import Property from '../models/properties.js'

export default async function saveProperty(req, res){
    try { //An error can be thrown; https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s 1:32:01
        const user = await User.findById(req.body.userID); //https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 1:38:07
        if (!user) {
            return res.status(500).json({popup: "Not signed in"})
        }
        const property = await Property.findById(req.body.propertyID)
        for (let i = 0; i < user.ownedProperties.length; i++) {
            if (user.ownedProperties[i].toString() == req.body.propertyID) { //https://stackoverflow.com/questions/13104690/node-js-mongodb-objectid-to-string
                user.ownedProperties.pull(user.ownedProperties[i]); //https://mongoosejs.com/docs/5.x/docs/api/array.html
                await user.save();
                return res.status(500).json({popup: "Removed from favorites!"})
            }
        }
        user.ownedProperties.push(property._id); //https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 1:38:48
        await user.save();
        return res.status(200).json({popup: "Saved!"});
    } 
    catch (err) { //catches the error at "user.role" if user is found to be null
        return res.status(500).json(err);
    }
} 