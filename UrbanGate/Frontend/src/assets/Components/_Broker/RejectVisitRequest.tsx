// import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function RejectVisitRequest() {
  const { visitRequestId } = useParams();
  const brokerId = localStorage.getItem("UserID");

  const handleRejectRequest = async () => {
    try {
      //check if visitRequestId is available
      if (!visitRequestId) {
        toast.error("Visit request ID is missing.");
        return;
      } 
      const getResponse = await axios.get(`https://urbangatebackend-production-1218.up.railway.app/readVisitRequest/${visitRequestId}`);
      
      if (getResponse.data.Status === 'rejected') {
        //if the visit request is already rejected then show a message.
        toast.info("Visit request is already rejected.");
        return;
      }

      console.log( visitRequestId);
      console.log(brokerId);
      //send a PUT request to backend API to update the visit request status.
      const response = await axios.put(`https://urbangatebackend-production-1218.up.railway.app/RejectVisitRequest/${visitRequestId}`, {
      
      Status: 'rejected',
      brokerId: brokerId,
});


      //check if the request was successful
      if (response.status === 200) {
        // Show a success message
        toast.success("Visit request rejected successfully!");

      } else {
        toast.error("Failed to reject visit request.");
      }
    } catch (error) {
      console.error("Error rejecting visit request:", error);

      toast.error("An error occurred while rejecting the visit request.");
    }
  }

  return (
    <div>
      <button onClick={handleRejectRequest}>Reject Visit Request</button>
    </div>
  );
}

export default RejectVisitRequest;
