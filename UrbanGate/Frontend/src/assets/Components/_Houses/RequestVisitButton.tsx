// REFERENCES
// [1] React Documentation: https://react.dev/learn

// import necessary dependencies
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./RequestVisit.css";
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import { toast } from "react-toastify";

function RequestVisitButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [property, setProperty] = useState({title: "string", description: "string", type: "string", price: "string", location: "string", area: "string", bedroom: "string", bathroom: "string", status:"string", imageUrl: "string"});
  
  const {_id } = useParams();
  const getProperty = () => {
    axios.get(`http://localhost:3000/readPropertyID/${_id}`).then((response) => {
  
    setProperty(response.data);
    console.log(response.data);
    console.log(response.data.title);
    console.log(property.title);
   }).catch((error) => {
     console.log(error);
   });
  }
  useEffect(() => {

    getProperty();
    
  }, [_id]);

  // open the modal window
  const openModal = () => {
    setModalIsOpen(true);
  };

  // close the modal window
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Sets the selected date and closes the modal window
  const handleDateSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    closeModal();

    // ******* implement a way to collect user details etc...
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const userID = localStorage.getItem("UserID");
    console.log(userID);

    if (userID) {
      const data = { userID, _id ,selectedDate, selectedTime };
      console.log(data);
      axios.post("http://localhost:3000/visitRequest", data)
        .then(() =>  toast.success("Visit request submitted successfully"))
        .catch((res) => toast.error("Error submitting visit request: " + res));
      navigate("/houses");
    } else {
      toast.error("User not logged in.");
    }
  }


  // style the modal window
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "60%",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <div>
      <button className="request-button" onClick={openModal}>
        Request Visit
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal} //
        style={customStyles}
        contentLabel="Select Date Modal"
      >
        <h3 className="select-date-heading">Select a date and time</h3>
        <input
          className="date-input"
          type="date"
          onChange={(e) => handleDateSelect(e.target.value, selectedTime || "")}
          value={selectedDate || ""}
        />
        <select
          className="time-select"
          value={selectedTime || ""}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select a Time</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
        <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      </Modal>
    </div>
  );
}

Modal.setAppElement("#root");

export default RequestVisitButton;
