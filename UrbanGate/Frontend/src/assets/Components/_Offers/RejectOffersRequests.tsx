// import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function RejectOfferRequest() {
  const { offerId } = useParams();
  const brokerId = localStorage.getItem("UserID");

  const handleRejectRequest = async () => {
    try {
      //check if offerId is available
      if (!offerId) {
        toast.error(" offer ID is missing.");
        return;
      }
      const getResponse = await axios.get(`http://localhost:3000/readOfferRequest/${offerId}`);
      
      if (getResponse.data.Status === 'rejected') {
        //if the offer is already rejected then show a message.
        toast.info("offer is already rejected.");
        return;
      }

      console.log( offerId);
      console.log(brokerId);
      //send a PUT request to backend API to update the visit request status.
      const response = await axios.put(`http://localhost:3000/RejectOfferRequest/${offerId}`, {
      
      Status: 'rejected',
      brokerId: brokerId,
});


      //check if the request was successful
      if (response.status === 200) {
        // Show a success message
        toast.success("Offer rejected successfully!");

      } else {
        toast.error("Failed to reject Offer.");
      }
    } catch (error) {
      console.error("Error rejecting Offer:", error);

      toast.error("An error occurred while rejecting the Offer.");
    }
  }

  return (
    <div>
      <button onClick={handleRejectRequest}>Reject Visit Request</button>
    </div>
  );
}

export default RejectOfferRequest;
