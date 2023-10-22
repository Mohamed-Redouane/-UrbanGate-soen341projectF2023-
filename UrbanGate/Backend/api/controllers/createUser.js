import User from '../models/users.js';
/*
* This function checks with the email provided if there is already an account with the provided email
* Rejects the request if  account with the same email already exists
* Accepts the request and creates an object in the database if the email with the same email does NOT exist 
*/

/* 
* I Followed this guide:
* https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 50:12
*/
export default async function createUser(req, res) {
    const email = req.body.email;
    try { //An error can be thrown; https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s 1:32:01
        const userAlreadyThere = await User.findOne({email}); //look for the email, if it does not exist enter if statement; https://mongoosejs.com/docs/api/model.html#Model.findOne()
        if (userAlreadyThere) { //if value is truthy, meaning that an object has been found in the data, then don't create another account with the same email; https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s 1:30:21
            console.log("Did not create");
            return res.json({popup: "This email already has an associated account"});
        }
        else {
            const user = new User({ name: req.body.name, email: req.body.email, password: req.body.password, role: req.body.role })
            await user.save(); //await because .save is a promise
            return res.json({popup: "Successfully created user"}); //return to end the execution of function: https://stackoverflow.com/questions/43055600/app-get-is-there-any-difference-between-res-send-vs-return-res-send
        }
    }
    catch (err) { //An error can be caught; https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s 1:32:01
        res.json(err);
    }
}