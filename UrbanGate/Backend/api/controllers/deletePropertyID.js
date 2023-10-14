import Property from '../models/properties.js'

export default async function deleteProperty (req, res) {
try {

    const { _id } = req.params;
    console.log(_id+"i am in the backend")
    const response = await Property.findByIdAndDelete({_id});

   /* if (!response) {
        return res.status(404).json({
          type: "error",
          message: "Property not found!",
        });
      } 
      */
    return res.status(200).json(response);
    
}
catch (Exception) {
    res.status(500).json({
        type: "error",
        message: "Error in reading properties!",
        error: Exception,
      });
}
}