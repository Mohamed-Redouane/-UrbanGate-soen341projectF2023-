import Property from '../models/properties.js'

export default async function readProperty(req, res) {
    try {
        const response = await Property.find({}); //finds all the objects in database
        return res.json(response);
    }
    catch (err) {
        res.json({err});
    }
}