import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function ManageProperties() {
  //[1], functional component
  const [properties, setProperties] = useState<any[]>([]);
  let tempProperty;

  const getHouses = () => {

    console.log(properties);

    axios.post('http://localhost:3000/manageProperties', { userID: window.localStorage.getItem("UserID") }).then((response) => {
      setProperties(response.data);
      //console.log(response.data);

    }).catch((error) => {
      console.log(error);
    });


  }


  useEffect(() => {
    getHouses();
  }, []);



  return (
    //[1] returns tsx (typescript xml)







    <div>
      {properties.map((House) =>
        <div className="card bg-dark text-white mx-4 mt-5" style={{ width: "310px", height: "460px", display: "inline-block" }}>
          <img src={House.image} className="card-img-top" alt="..." style={{ height: "200px" }}></img>
          <div className="card-body">
            <ul className="list-group list-group-horizontal" style={{ fontSize: "11px", height: "30px", width: "270px" }}>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "110px", padding: "none" }}> Location:  <br></br> <p style={{ textAlign: "center" }}> {House.location}</p></li>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "110px", padding: "none" }}>Type:<br></br> <p style={{ textAlign: "center" }}> {House.type} </p> </li>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "100px", padding: "none" }}> Beds: {House.bedroom} <br></br>Baths: {House.bathroom}</li>
            </ul><br></br>
            <h5 className="card-title mt-1"> {House.price} </h5>
            <p className="card-text" style={{ fontSize: "15px" }}> {House.description}</p>
            <div>
            <button className="btn btn-secondary text-white">
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