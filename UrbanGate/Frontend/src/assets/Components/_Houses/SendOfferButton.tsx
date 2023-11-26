// REFERENCES
// [1] React Documentation: https://react.dev/learn

// import necessary dependencies
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./RequestVisit.css";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { toast } from "react-toastify";

function SendOfferButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [offerPrice, setOfferPrice] = useState("");
  const [_, setProperty] = useState({
    title: "string",
    description: "string",
    type: "string",
    price: "string",
    location: "string",
    area: "string",
    bedroom: "string",
    bathroom: "string",
    status: "string",
    imageUrl: "string",
  });

  const { _id } = useParams();

  const getProperty = () => {
    axios
      .get(`https://urbangatebackend-production-1218.up.railway.app/readPropertyID/${_id}`)
      .then((response) => {
        setProperty(response.data);
        console.log(response.data);
        console.log(response.data.title);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
  const handleOfferPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOfferPrice(e.target.value);
    console.log(offerPrice);
  };



  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(
      "Offer submitted successfully (THIS IS A TEMPORARY FUNCTION WILL CHANGE IT)"
    );
    const userID = localStorage.getItem("UserID");
    console.log(userID);

    if (userID) {
      const data = { userID, _id, offerPrice };
      console.log(data);
      console.log(offerPrice);
      axios
        .post("https://urbangatebackend-production-1218.up.railway.app/Offer", data)
        .then(() => toast.success("Offer submitted successfully"))
        .catch((res) => toast.error("Error submitting offer: " + res));
      // navigate("/houses");
    } else {
      toast.error("User not logged in.");
    }
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
      <button className="request-button" onClick={openModal}>
        Make an offer
      </button>

      <Modal
        isOpen={modalIsOpen} // https://mui.com/material-ui/react-modal/
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Select Date Modal"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <h3 className="select-date-heading">Make an offer</h3>
        <form id="offer-form">
          <input
            className="date-input"
            type="number"
            min="0"
            onChange={handleOfferPriceChange}
          />
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </form> 
      </Modal>
    </div>
  );
}

Modal.setAppElement("#root");

export default SendOfferButton;
