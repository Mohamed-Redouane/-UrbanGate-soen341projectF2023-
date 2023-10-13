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
      {!isLoading && user === "yes" && (
        <div>
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
              Whether you trade a lot or a little, WE WILL HELP YOU GET AHEAD!
            </p>
          </div>
        </div>
      )}
      {!isLoading && user !== "yes" && (
        <p>
          This page is reserved to Brokers. Please log in or create a Broker
          account
        </p>
      )}
    </div>
  );
}

export default Broker;
