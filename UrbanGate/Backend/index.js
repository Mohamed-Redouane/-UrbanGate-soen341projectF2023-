const express = require ('express');
const mongoose = require ('mongoose');
const app = express();

app.use (express.json());
app.use(express.urlencoded({extended: true}));

async function main () {
    await mongoose.connect("mongodb+srv://student:MWG0ZhzI4XCZF9wP@cluster0.umkft0l.mongodb.net/?retryWrites=true&w=majority");
}

app.get("/",(req,res)=>{
    console.log("Test");
    res.send("HI");
})

app.listen(3000,()=> {
    console.log("Listening on port 3000");
})
