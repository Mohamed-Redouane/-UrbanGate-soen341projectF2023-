import Property from '../models/properties.js'

export default async function readProperty (req, res) {
try {

    const { _id } = req.params;
    const response = await Property.findById({_id});
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