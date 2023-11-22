import User from '../models/users.js'
import Property from '../models/properties.js'

export default async function saveProperty(req, res){
    try { //An error can be thrown; https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s 1:32:01
        let propertyArr = [];
        const user = await User.findById(req.body.userID); //https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 1:38:07
        for (let i = 0; i < user.ownedProperties.length; i++) {
            propertyArr[i] = await Property.findById(user.ownedProperties[i]);
        }
        return res.status(200).json({houses: propertyArr});
    }
    catch (err) { //catches the error at "user.role" if user is found to be null
        return res.status(500).json(err);
    }
} 