import Property from '../models/properties.js'
import User from '../models/users.js'

/* 
* This function checks if the user is a broker and creates a property in the database
* I Followed this guide:
* https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 1:39:18
*/

export default async function createProperty(req, res) {
  try { //An error can be caught; https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s 1:32:01
    const user = await User.findById(req.body.userID);
    if (!user) {return res.json({popup: "Not Signed in!",});}
    if (user.role != "broker") {return res.status(500).json({popup: "Not a broker"});}
    const title = req.body.title;
    const propertyAlreadyThere = await Property.findOne({title});
    if (propertyAlreadyThere) {return res.status(500).json({popup: "Property already exists"});} //avoid having 2 titles, because a title is unique
    const property = new Property({
      title: req.body.title,
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
    user.ownedProperties.push(property._id); //https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 1:38:48
    await property.save(); //await because .save is a promise
    await user.save();
    return res.status(200).json({popup: "Successfully created property"});
  }
  catch (err) { //An error can be caught; https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s 1:32:01
    return res.status(500).json(err);
  }
}