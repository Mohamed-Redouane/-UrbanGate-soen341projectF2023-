import User from '../models/users.js' 

export default async function searchBrokers(req, res) {

      try{
        
        const response = await User.find({role: "broker", name: req.body.name}); //https://mongoosejs.com/docs/api/model.html#Model.find()

        return res.status(200).json({
        response: response,
        popup: "Good"});
    }
        catch{
            return res.status(500).json({popup: "Bad"});
        }
      
     
}