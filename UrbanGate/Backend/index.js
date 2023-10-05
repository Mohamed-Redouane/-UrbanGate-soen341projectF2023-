import express from 'express';
import connectDB from './utils/mdbconfig.js';
import cors from 'cors'

const app = express();
app.use(cors());  //         helps control and secure cross origin requests between frontend and backend applications hosted on different domains(ports).

connectDB().then(() => {
        console.log("Connected to the database")
    }).catch((err) => {
        console.error(err)
    })


const PORT =  3000;


app.listen(PORT, () => {
    console.log(`Server is running  ${PORT}`);
});

