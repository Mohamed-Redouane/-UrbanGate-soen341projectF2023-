import mongoose from "mongoose";//properties

const PropertySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },

    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["house", "apartment", "condo"],
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    bedroom: {
        type: Number,
        required: true
    },
    bathroom: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["for_sale", "for_rent"],
        required: true
    },
    image: {
        type: String,
        required: true,
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
        required:true,
    },
});

export default mongoose.model("properties", PropertySchema);