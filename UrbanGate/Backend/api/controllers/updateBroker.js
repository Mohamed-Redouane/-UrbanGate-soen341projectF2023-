import User from '../models/users.js';

export default async function updateBroker(req, res) {
    try {
        const user = await User.findById(req.body.userID);
        if (!user) {return res.json({popup: "Not signed in"})}
        const email = req.body.email;
        const emailAlreadyThere =  await User.findOne({email});
        if (user.email===req.body.email) {
            if (user.name === req.body.name && user.password === req.body.password) {
                return res.json({popup: "Nothing changed"})
            }
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            await user.save();
            return res.json({popup: "Update Success"});
        }
        if (emailAlreadyThere) {return res.json({popup: "Email already in use"});}

        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        await user.save();
        return res.json({popup: "Update Success"});

    }
    catch (err) {
        return res.json(err);
    }
}