// REFERENCES
// [1] React Documentation: https://www.w3schools.com/REACT/DEFAULT.ASP
// [2] React Documentation: https://react.dev/learn

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./BrokerPage.css";

function Broker() {
  const [user, checkUser] = useState("");
  const [isLoading, setLoading] = useState(true);

  const f = async () => {
    await setLoading(true);
    await axios
      .post("http://localhost:3000/checkUser", {
        userID: window.localStorage.getItem("UserID"),
      })
      .then((res) => {
        console.log("valid");
        checkUser(res.data);
      })
      .catch((res) => {
        console.log("not valid");
        checkUser(res.data);
      });
    await setLoading(false);
  };

  useEffect(() => {
    f();
  }, []);

  return (
    <div className="broker-container">
      {isLoading && <h1>Loading!</h1>}
      {!isLoading && user == "broker" && (
        <div className="broker-ContainerInside">
          <h1>Welcome, Broker</h1>
          <p>Here you can access all your broker functions and informations.</p>
          <div className="broker-buttons">
            <Link to="/broker/CreateProperty" className="broker-button">
              Create Property
            </Link>
            <Link to="/broker/ManageProperties" className="broker-button">
              Manage Properties
            </Link>
          </div>
          <div className="broker-background"></div>
          <div className="broker-text">
            <h2>Unlock Your Full Potential as a Broker</h2>
            <p>
              Join our community of brokers and fulfill your personal and
              professional dreams.
            </p>
            <p>
              Whether you trade a lot or a little,
              <b> WE WILL HELP YOU GET AHEAD!</b>
            </p>
          </div>
        </div>
      )}
      {!isLoading && user == "admin" && (
        <div>
          <h1>Welcome, Admin</h1>
          <p>Here you can access all your Admin functions and informations.</p>
          <div className="broker-buttons">
            <Link to="/broker/CreateBroker" className="broker-button">
              Create Broker
            </Link>
            <Link to="/broker/ManageBrokers" className="broker-button">
              Manage Brokers
            </Link>
          </div>
          <div className="broker-background"></div>
          <div className="broker-text">
            <h2>Unlock Your Full Potential as an Admin</h2>
          </div>
        </div>
      )}
      {!isLoading && user != "broker" && user != "admin" && (
        <div>
          <p>
            This page is reserved to Brokers and Admins. Please log in or create
            a Broker/Admin account
          </p>
        </div>
      )}
    </div>
  );
}

export default Broker;
