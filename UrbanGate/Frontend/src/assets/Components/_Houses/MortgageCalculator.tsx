import React, { useState } from "react";
import Modal from "react-modal";
import "./MortgageCalculator.css";

const MortgageCalculator: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mortgageAmount, setMortgageAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [paymentFrequency, setPaymentFrequency] = useState<number>(12);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const calculateMortgage = () => {
    // Calculate the monthly payment using the formula
    const r = interestRate / 100;
    const n = paymentFrequency;
    const t = term;

    const numerator = mortgageAmount * (r / n);
    const denominator = 1 - Math.pow(1 + r / n, -n * t);
    const mortgagePayment = numerator / denominator;

    setMonthlyPayment(mortgagePayment);
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
      <h2>Mortgage Calculator</h2>
      <button className="open-button" onClick={openModal}>
        Open Calculator
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Mortgage Calculator Modal"
      >
        <h2>Mortgage Calculator</h2>
        <form>
          <label>
            Mortgage Amount:
            <input
              type="number"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(Number(e.target.value))}
            />
          </label>
          <label>
            Interest Rate (%):
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </label>
          <label>
            Term (years):
            <input
              type="number"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
            />
          </label>
          <label>
            Payment Frequency:
            <select
              value={paymentFrequency}
              onChange={(e) => setPaymentFrequency(Number(e.target.value))}
            >
              <option value={12}>Monthly</option>
              <option value={26}>Bi-weekly</option>
              <option value={52}>Weekly</option>
            </select>
          </label>
          <button type="button" onClick={calculateMortgage}>
            Calculate
          </button>
        </form>
        {monthlyPayment && <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>}
      </Modal>
    </div>
  );
};

Modal.setAppElement("#root");
export default MortgageCalculator;
