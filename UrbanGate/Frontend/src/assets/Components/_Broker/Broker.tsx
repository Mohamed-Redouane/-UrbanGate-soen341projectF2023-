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
  const brokerId = localStorage.getItem("UserID");
  const [brokers, setBrokers] = useState<any[]>([]); //
  const [search, setSearch] = useState("");



  

  const f = async () => {
    await setLoading(true); //
    await axios.post("http://localhost:3000/checkUser", {userID: window.localStorage.getItem("UserID"),}) //https://www.youtube.com/watch?v=enOsPhp2Z6Q at 28:12
      .then((res) => {
        console.log("valid");
        checkUser(res.data);
      })
      .catch((err) => {
        console.log("not valid");
        checkUser(err.response.data);
      });
    await setLoading(false); //


  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSubmit = () => {

    axios.post("http://localhost:3000/searchBroker", {name: search}).then((res) => {
      console.log(res.data.response[0]);

    }).catch((err) => {
      alert("not found!");
    });



  }

  useEffect(() => {
    f();
  }, []); // Will only be called once on reload https://stackoverflow.com/questions/72824151/react-useeffect-keeps-fetching + https://www.tutorialspoint.com/how-to-call-the-loading-function-with-react-useeffect

  return (
    <div className="broker-container"> 
      {isLoading && <h1>Loading!</h1>} {/* */}
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
            <Link to="/broker/ManageVisitRequests/${brokerId}"className="broker-button">
              Visit Requests
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
      )} {/* */}
      {!isLoading && user == "admin" && (
        <div>
          <h1 style={{color: 'white'}}>Welcome, Admin</h1>
          <p style={{color: 'white'}}>Here you can access all your Admin functions and informations.</p>
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
      {!isLoading && user != "broker" && user != "admin"  && user != "homebuyer" && user != "renter" && (
        <div>
          <p style={{color: 'white'}}>
            This page is reserved to users that are signed in. Please log in or create
            a homebuyer or broker account.
          </p>
        </div>
      )}
      {!isLoading && (user == "homebuyer" || user == "renter") && (
        <div>
          <p style={{color: 'white'}}>
            Welcome {user}!
            <br></br>
            <br></br>
            <input type = "text" placeholder = "Enter the name of a broker" style = {{width: "50vw"}} value = {search} onChange = {handleSearchChange} onSubmit = {handleSubmit}></input> <button className = "nav-box4" onClick = {handleSubmit}>Search</button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Broker;
