import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import "./ManageOffersRequests.css"; 

function ManageOffersRequests() {
    const [user, checkUser] = useState("");
  
    const f = () => {
      axios.post("http://localhost:3000/checkUser", {userID: window.localStorage.getItem("UserID"),}) //https://www.youtube.com/watch?v=enOsPhp2Z6Q at 28:12
        .then((res) => {
          console.log("valid");
          checkUser(res.data);
        })
        .catch((err) => {
          console.log("not valid");
          checkUser(err.response.data);
        });
    };
  
  useEffect(() => {f();}, []); 
  return (
    <>
  {user != "broker" && user != "admin"  && user != "homebuyer" && user != "renter" && (
    <div className="offer-guest-page">
      <div className = "offer-page-picture">
      <img height="600px" src="https://www.treehugger.com/thmb/rAgSXnE9wAaV6rjjnpiQPo4ymFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cas.28ftPayetteUrban_NavalForceWalls-2511-e42ce2eb724748b0bf8a412b068f9051.jpg" alt="image"></img>
      </div>
      <div className="color-background-picture-offer-page"></div>
      <div className="offer-page-text">
        <p className="offer-page-login-title"> Log In and Make An Offer</p>
        <p className="offer-page-login-message">  Once you are logged in, you can start making offers on the properties that catch your eye. <br></br>
          Our user-friendly interface makes it easy to submit your offers with just a few clicks. <br></br>
          To facilitate user experience, all offers made and their updates will be displayed under this page. </p> <br/>
        <button className="offer-page-login"><a href="/accounts" style={{textDecoration:"none", color:"black"}}> Click Here to Log in/Sign up</a></button>
        </div>
    </div>
    )}
    </>
  )
  }
export default ManageOffersRequests; 
