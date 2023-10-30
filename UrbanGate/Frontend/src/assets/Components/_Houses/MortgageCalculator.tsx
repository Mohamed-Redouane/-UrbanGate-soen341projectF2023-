import React, { useState } from "react";
import Modal from "react-modal";
import "./MortgageCalculator.css";

const MortgageCalculator: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mortgageAmount, setMortgageAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [paymentFrequency, setPaymentFrequency] = useState<number>(12);
  const [sentence, setSentence] = useState<string | null>(null);
  let monthlyPayment = 0;

  const openModal = () => { //
    setModalIsOpen(true);
  };

  const closeModal = () => { //
    setModalIsOpen(false);
    setSentence(" ");
    resetValues();
  };

  const resetValues = () => {
    setMortgageAmount(0);
    setInterestRate(0);
    setTerm(0);
    setPaymentFrequency(12);
  };

  const calculateMortgage = () => {
    if (mortgageAmount <= 0 || interestRate <= 0 || term <= 0) {
      alert("Please fill each space with numbers bigger than 0.");
    } else {
      // Calculate the monthly payment using the formula
      const r = interestRate / 100;
      const n = paymentFrequency;
      const t = term;

      const numerator = mortgageAmount * (r / n);
      const denominator = 1 - Math.pow(1 + r / n, -n * t);
      const mortgagePayment = numerator / denominator;

      monthlyPayment = mortgagePayment;
      if (monthlyPayment !== null) {
        let amount = monthlyPayment.toFixed(2);
        setSentence(
          "Your monthly payment for a duration of " +
            term +
            " year(s) would be: $" +
            amount +
            "/month."
        );
      }
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
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
      height: "500px",
      backgroundColor: "#e9e7e7",
      width: "900px",
    },
  };

  return (
    <div style={{ width: "900px" }}>
      <button className="open-button" onClick={openModal}> //
        Open Calculator
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Mortgage Calculator Modal"
        style={customStyles}
      >
        <h2 className="modal-title">Mortgage Calculator</h2>
        <small className="prompt">
          Please enter numerical values to estimate your monthly payment.
        </small>
        <form className="modal-form">
          <label>
            Mortgage Amount:
            <input
              type="number"
              min="0"
              onChange={(e) => setMortgageAmount(Number(e.target.value))}
            />
          </label>
          <label>
            Interest Rate (%):
            <input
              type="number"
              min="0"
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </label>
          <label>
            Term (years):
            <input
              type="number"
              min="0"
              onChange={(e) => setTerm(Number(e.target.value))}
            />
          </label>
          <label>
            Payment Frequency:
            <select
              onChange={(e) => setPaymentFrequency(Number(e.target.value))}
            >
              <option value={12}>Monthly</option>
              <option value={26}>Bi-weekly</option>
              <option value={52}>Weekly</option>
            </select>
          </label>
          <button type="button" onClick={calculateMortgage} className="calculate-button">
            Calculate
          </button>
        </form>
        <p className="sentence-display">{sentence}</p>
      </Modal>
    </div>
  );
};

Modal.setAppElement("#root"); //
export default MortgageCalculator;
