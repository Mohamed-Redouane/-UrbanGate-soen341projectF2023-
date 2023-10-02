import express from 'express';
import connectDB from './utils/mdbconfig.js';



const app = express();

connectDB().then(() => {
        console.log("Connected to the database")
    }).catch((err) => {
        console.error(err)
    })


const PORT =  3000;


app.listen(PORT, () => {
    console.log(`Server is running  ${PORT}`);
});