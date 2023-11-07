// import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AcceptVisitRequest() {
  const { visitRequestId } = useParams();
  const brokerId = localStorage.getItem("UserID");

  const handleAcceptRequest = async () => {
    try {
      //check if visitRequestId is available 
      if (!visitRequestId) {
        toast.error("Visit request ID is missing.");
        return;
      }
      const getResponse = await axios.get(`http://localhost:3000/readVisitRequest/${visitRequestId}`);
      
      if (getResponse.data.Status === 'accepted') {
        //if the visit request is already accepted then show a message and return
        toast.info("Visit request is already accepted.");
        return;
      }

      console.log( visitRequestId);
      console.log(brokerId);

      //send a PUT request to backend API to update the visit request status
      const response = await axios.put(`http://localhost:3000/AcceptVisitRequest/${visitRequestId}`, {
      
      Status: 'accepted',
      brokerId: brokerId,
});


      //check if the request was successful
      if (response.status === 200) {
        toast.success("Visit request accepted successfully!");

      } else {
        toast.error("Failed to accept visit request.");
      }
    } catch (error) {
      console.error("Error accepting visit request:", error);
      
      toast.error("An error occurred while accepting the visit request.");
    }
  }

  return (
    <div>
      <button onClick={handleAcceptRequest}>Accept Visit Request</button>
    </div>
  );
}

export default AcceptVisitRequest;
