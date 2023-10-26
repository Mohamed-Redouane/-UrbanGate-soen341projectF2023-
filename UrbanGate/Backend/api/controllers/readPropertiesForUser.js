import Property from '../models/properties.js';

export default async function readPropertiesForUser(req, res) {
    try {
        const brokerId = req.params.brokerId;
        console.log(brokerId);
        const properties = await Property.find({broker: brokerId });
console.log(properties);
        if (!properties || properties.length === 0) {
            return res.status(404).json({
                type: "error",
                message: "No properties found for the user",
            });
        }
        console.log(properties);
        return res.status(200).json(properties);
        
    } catch (error) {
        res.status(500).json({
            type: "error",
            message: "Error in reading properties",
            error: error,
        });
    }
}
