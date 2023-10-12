import Property from '../models/properties.js'

export default async function readProperty (res) {
try {
    const response = await Property.find({}); //finds all the objects in database
    res.json(response);
}
catch (Exception) {
    res.json(Exception)
}
}