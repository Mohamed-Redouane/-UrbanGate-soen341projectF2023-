import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./ManageProperties.css"

function ManageProperties() {
  const [properties, setProperties] = useState<any[]>([]);

  const getHouses = () => {
    axios.post('http://localhost:3000/manageProperties', {userID: window.localStorage.getItem("UserID")})
    .then((response) => {
      setProperties(response.data);
    })
    .catch((error) => {
      console.log(error + "AAA");
    });
  }

  useEffect(() => {
    getHouses();
  }, []);

  return (
    <div>
      {properties.map((House) =>
        <div className="card bg-dark text-white mx-4 mt-5" style={{ width: "310px", height: "460px", display: "inline-block" }}>
        <div className="card-image"> <img src={House.image} className="card-img-top" alt="..." style={{ height: "200px" }}></img></div>
        <div className="card-body">
          <ul className="list-group list-group-horizontal" style={{fontSize: "11px", height: "30px", width: "280px", padding: 0}}>
            <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "100px", padding:"8px" }}> Location:  <br></br> <p style={{ textAlign: "center" }}> {House.location}</p></li>
            <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "90px", padding:"8px" }}>Type:<br></br> <p style={{ textAlign: "center" }}> {House.type} </p> </li>
            <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "100px", padding:"8px" }}> {House.bedroom} <br></br>{House.bathroom}</li>
          </ul><br></br>
          <p className="card-price"> {(House.status === "for_rent") ? <p>${House.price}/month</p> : <p>${House.price}</p> } <p className="card-status">{House.status}</p></p>
          <p className="card-text"> {House.description}</p>
            <div>
            <button className="btn btn-secondary text-white mx-3">
                <Link to={`/broker/ManageProperties/EditProperties/${House._id}`} style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>Edit Property</Link></button>
              <button className="btn btn-secondary text-white">
                <Link to={`/broker/ManageProperties/DeleteProperties/${House._id}`} style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>Delete Property</Link></button>
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
}

export default ManageProperties;