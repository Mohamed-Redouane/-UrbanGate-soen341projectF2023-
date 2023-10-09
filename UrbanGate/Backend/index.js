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


const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running  ${PORT}`);
});


