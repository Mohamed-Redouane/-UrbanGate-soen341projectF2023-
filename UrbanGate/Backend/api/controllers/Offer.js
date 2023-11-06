import SendOffer from '../models/send_offer.js';
import Property from '../models/properties.js';
import User from '../models/users.js';
import mongoose from "mongoose";


// Create a visit request
export async function createOffer(req, res) {
    try {
        const { _id, userID, offerPrice } = req.body;

        console.log(req.body);

        const propertyExists = await Property.findById(_id);
        const requesterExists = await User.findById(userID); //https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 1:38:07

        if (!propertyExists || !requesterExists) {
            return res.status(404).json({ message: 'Property or requester not found' });
        }

        const sendOffer = new SendOffer({
            _id: new mongoose.Types.ObjectId(), 
            property: _id,
            requester: userID,
            Status: 'pending',
            amount: offerPrice,
        });
        

        await sendOffer.save();

        res.status(201).json(sendOffer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create visit request' });
    }
}
/*
// Approve a visit request
export async function approveSendOffer(req, res) {
    try {
        const { SendOfferId } = req.params;

        const sendOffer = await SendOffer.findByIdAndUpdate(SendOfferId, {
            Status: 'approved', 
            approvedOffer: new Date(),
        });

        res.status(200).json(sendOffer);
    } catch (error) {
        res.status(500).json({ message: 'Failed to approve visit request' });
    }
}

// Reject a visit request
export async function rejectSendOffer(req, res) {
    try {
        const { SendOfferId } = req.params;

        const sendOffer = await SendOffer.findByIdAndUpdate(SendOfferId, {
            Status: 'rejected', 
            rejectedOffer: new Date(),
        });

        res.status(200).json(sendOffer);
    } catch (error) {
        res.status(500).json({ message: 'Failed to reject visit request' });
    }
}
*/