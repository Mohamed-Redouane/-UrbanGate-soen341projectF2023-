import Property from '../models/properties.js'

export default async function readProperty (req, res) {
    try {
        const { _id } = req.params;
        const response = await Property.findById({_id});
        return res.json(response);
    }
    catch (err) {
        res.json(err);
    }
}