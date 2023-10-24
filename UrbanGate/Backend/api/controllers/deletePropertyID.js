import Property from '../models/properties.js'

export default async function deleteProperty (req, res) {
  try {
    const { _id } = req.params;
    console.log(_id+"i am in the backend")
    
    const response = await Property.findByIdAndDelete({_id});
    return res.status(200).json(response);
  }
  catch (Exception) {
    res.status(500).json({message: "Error in reading properties!",});
  }
}