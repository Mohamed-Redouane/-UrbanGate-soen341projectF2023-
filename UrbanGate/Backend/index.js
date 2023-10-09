import express from 'express';
import connectDB from './utils/mdbconfig.js';
import cors from 'cors'
import USER from './api/models/users.js'

const app = express();
app.use(cors());  //helps control and secure cross origin requests between frontend and backend applications hosted on different domains(ports).
app.use(express.json());

connectDB().then(() => {
        console.log("Connected to the database")
    }).catch((err) => {
        console.error(err)
    })

//CREATE USER
/////////////
app.post("/createUser", async(req,res)=> { //must put async because theres an await statement
    let user = new USER({name: req.body.name, email: req.body.email, password: req.body.password, role: req.body.role})
    try {await user.save();console.log("USER CREATED")} //await because its a .save is a promise
    catch (Exception) {console.log("USER ALREADY EXISTS");}
})

app.post("/signIn"), async(req,res)=>{
    const { email, password } = req.body;
    const user = await USER.findOne({ email}); //look for the email, if it does not exist enter if statement

    if(!user){ //user is not found as email does not match in the database
        return res.json({message:"Account does not exist"});
    }

    const passwordCheck = await compare(password, user.password); //compares the password from the request with the password of the user
    if (!passwordCheck){
        return res.json({message:"Password is incorrect"})
    }

    const token = jwt.sign({user_id:user._id}); //token is a string of unreadable data,
}

const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running  ${PORT}`);
});


