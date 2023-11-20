// import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AcceptOfferRequest() {
  const { offerId } = useParams();
  const brokerId = localStorage.getItem("UserID");

  const handleAcceptRequest = async () => {
    try {
      //check if offerId is available 
      if (!offerId) {
        toast.error("Offer ID is missing.");
        return;
      }
      const getResponse = await axios.get(`https://urbangatebackend-production-1218.up.railway.app/readOfferRequest/${offerId}`);
      
      if (getResponse.data.Status === 'accepted') {
        //if the visit request is already accepted then show a message and return
        toast.info("Offer is already accepted.");
        return;
      }
      //send a PUT request to backend API to update the visit request status
      const response = await axios.put(`https://urbangatebackend-production-1218.up.railway.app/AcceptOfferRequest/${offerId}`, {
      
      Status: 'accepted',
      brokerId: brokerId,
});


      //check if the request was successful
      if (response.status === 200) {
        toast.success("Offer accepted successfully!");

      } else {
        toast.error("Failed to accept Offer.");
      }
    } catch (error) {
      console.error("Error accepting offer:", error);
      
      toast.error("An error occurred while accepting the offer.");
    }
  }

  return (
    <div>
      <button onClick={handleAcceptRequest}>Accept Offer</button>
    </div>
  );
}

export default AcceptOfferRequest;
