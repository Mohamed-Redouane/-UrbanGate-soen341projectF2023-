import Property from '../models/properties.js'

export default async function readProperty(req, res) {
    try {
        const response = await Property.find({}); //finds all the objects in database
        return res.status(200).json(response);
    }
    catch (err) {
        res.status(500).json(err);
    }
}