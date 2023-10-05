import mongoose from "mongoose";//properties

const PropertieSchema = new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
        required: true
    }, 

    description:{
type:String,
required:true
    },
type:{
    type:String,
    enum:["house", "apartment", "condo"],
    required: true,
    

},
location:{
    type: String,
    required:true
},
price:{
    type:Number,
    required:true
},
area:{
    type:Number,
    required:true
},
badrooms:{
    type:Number,
    required:true
},
bathrooms:{
    type:Number,
    required:true
},
Status:{
    type:String,
    enum: ["for_sale","for_rent"],
    required:true
},
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    broker: {   //  relationship between properties and brokers
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

export default mongoose.model("Properties",PropertieSchema);