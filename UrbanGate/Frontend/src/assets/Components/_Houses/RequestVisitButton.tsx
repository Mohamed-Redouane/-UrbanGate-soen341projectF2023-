// REFERENCES
// [1] React Documentation: https://react.dev/learn

// import necessary dependencies
import React, { useState } from "react";
import Modal from "react-modal";
import "./RequestVisit.css";

function RequestVisitButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

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

    // implement a way to collect user details etc...
  };

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
      <h2>Test implementation</h2>
      <button className="request-button" onClick={openModal}>
        Request Visit
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Select Date Modal"
      >
        <button className="close-button" onClick={closeModal}>
          ❌
        </button>
        <h3 className="select-date-heading">Select a date and time</h3>
        <input
          className="date-input"
          type="date"
          onChange={(e) => handleDateSelect(e.target.value, selectedTime || "")}
          value={selectedDate || ""}
        />
        <div>
          <label htmlFor="morning">Morning</label>
          <input
            type="radio"
            id="morning"
            name="time"
            value="morning"
            onChange={(e) => setSelectedTime(e.target.value)}
            checked={selectedTime === "morning"}
          />
        </div>
        <div>
          <label htmlFor="afternoon">Afternoon</label>
          <input
            type="radio"
            id="afternoon"
            name="time"
            value="afternoon"
            onChange={(e) => setSelectedTime(e.target.value)}
            checked={selectedTime === "afternoon"}
          />
        </div>
        <div>
          <label htmlFor="evening">Evening</label>
          <input
            type="radio"
            id="evening"
            name="time"
            value="evening"
            onChange={(e) => setSelectedTime(e.target.value)}
            checked={selectedTime === "evening"}
          />
        </div>
      </Modal>
    </div>
  );
}

Modal.setAppElement("#root");

export default RequestVisitButton;
