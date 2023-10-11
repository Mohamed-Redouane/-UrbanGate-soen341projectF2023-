import Property from '../models/properties.js'
import User from '../models/users.js' //https://www.youtube.com/watch?v=3yaHWZdH0FM https://www.npmjs.com/package/react-cookie

export default async function createProperty(req, res) {

    console.log(req.body);

    const user = await User.findById(req.body.userID);
    if (!user) {console.log("NOT EVEN SIGNED IN"); return res.json("Error");}
    if (user.role == "broker") {

        
    try {
       const property = new Property({title: req.body.title, 
            description: req.body.description, 
            type: req.body.type,
            image: req.body.image,
            location: req.body.location,
            price: req.body.price,
            area: req.body.area,
            bedroom: req.body.bedroom,
            bathroom: req.body.bathroom,
            status: req.body.status,
            broker: user._id,
            })
        console.log("PROPERTY CREATED");
        res.json(property);
         user.ownedProperties.push(property._id);
        await property.save(); //await because .save is a promise
        await user.save();
    } 
    catch (Exception) {
        console.log("ERROR");} 
        res.json()}

    else {
        console.log("NOT A BROKER");
    }

}