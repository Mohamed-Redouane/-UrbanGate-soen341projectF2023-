// REFERENCES
// [1] React Documentation: https://react.dev/learn

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RequestVisitButton from "./RequestVisitButton";
import axios from 'axios';





/*
const [houses, setHouses] = useState([]); 
async function getHouses() {
    const response = await fetch("");
    const x = await response.json();
    setHouses(x); 
  }
  useEffect(()=> {getHouses()}, [])

  in the backend --> for loop, create array of ONLY for sale & will return an array of House Object
*/

const House = [
    { id: 1, imageUrl: "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg", price: "$500,000", Location: "Downtown", Type: "Appartment", NumberOfBaths: 2, NumberofBeds: 3, Description: "This space is to describe briefly the property.", },
    { id: 2, imageUrl: "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp", price: "$650,000", Location: "Saint-Laurent", Type: "Condo", NumberOfBaths: 1, NumberofBeds: 2, Description: "This space is to describe briefly the property.", },
    { id: 3, imageUrl: "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg", price: "$850,000", Location: "Mont-Royal", Type: "House", NumberOfBaths: 1, NumberofBeds: 2, Description: "This space is to describe briefly the property.", },
    { id: 4, imageUrl: "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp", price: "$850,000", Location: "Mont-Royal", Type: "House", NumberOfBaths: 1, NumberofBeds: 2, Description: "This space is to describe briefly the property.", },
];

const PriceRange = () => {
  const [minValue, setMinValue] = useState("0"); 
  const [maxValue, setMaxValue] = useState("1000000"); 
  return (
    <>
    <small style={{fontWeight:"bold"}}>Price Range:<br></br></small>
    <p style={{fontSize:"10px"}}>${minValue}-${maxValue}</p>
    <small>min:</small>
    <input type="range" className="form-range" min={0} max={1000000} step={10000} id="myRange" style={{width:"100px"}}
    value={minValue}
    onChange={event => setMinValue(event.target.value)}
    ></input>
    <small>max:</small>
    <input type="range" className="form-range" min={0} max={1000000} step={10000} id="myRange" style={{width:"100px"}}
    value={maxValue}
    onChange={event => setMaxValue(event.target.value)}
    ></input>
    </>
  );
};

function Houses() {
  //[1], functional component
  const [properties, setProperties] = useState<any[]>([]);
  let tempProperty;
  
  const getHouses = () => {
   
    console.log(properties);
    
    axios.get('http://localhost:3000/readProperty').then((response) => {
     setProperties(response.data);
     //console.log(response.data);
    
    Object.values(properties).map((x) => {console.log(x)});
    console.log(Array.isArray(response.data));

    }).catch((error) => {
      console.log(error);
    });


  }


  useEffect(() => {

    getHouses();

  }, []);

  

  return (
    //[1] returns tsx (typescript xml)
    <>
      <div
        className="dropdown mt-5 rounded border border-light border-3"
        style={{
          backgroundColor: "white",
          height: "230px",
          paddingLeft: "40px",
          paddingTop: "20px",
          width: "1200px",
          marginLeft: "100px",
        }}
      >
        <p style={{ fontWeight: "bold" }}> Search for available properties</p>
        <form style={{ width: "150px", display: "inline-block" }}>
          <select className="form-control">
            <option selected disabled>
              {" "}
              Choose Location
            </option>
            <option value="Downtown"> Downtown</option>
            <option value="NDG"> NDG</option>
            <option value="Villeray-Extension"> Villeray-Extension</option>
          </select>
        </form>
        <form
          style={{
            width: "150px",
            display: "inline-block",
            marginLeft: "30px",
          }}
        >
          <select className="form-control">
            <option selected disabled>
              {" "}
              Property Type
            </option>
            <option value="Appartment"> Appartment</option>
            <option value="Condo"> Condo </option>
            <option value="House"> House</option>
          </select>
        </form>

        <form
          style={{
            width: "150px",
            display: "inline-block",
            marginLeft: "30px",
          }}
        >
          <select className="form-control">
            <option selected disabled>
              {" "}
              Number of Beds
            </option>
            <option value="1Bed">1 bed</option>
            <option value="2Beds">2 beds</option>
            <option value="3Beds">3 beds</option>
          </select>
        </form>

        <form
          style={{
            width: "150px",
            display: "inline-block",
            marginLeft: "30px",
          }}
        >
          <select className="form-control">
            <option selected disabled>
              {" "}
              Number of Baths
            </option>
            <option value="1Bath">1 bath</option>
            <option value="2Baths">2 baths</option>
            <option value="3Baths">3 baths</option>
          </select>
        </form>

      <div className="PriceRange" style={{marginLeft:"40px",display:"inline-block", width:"150px"}}>
      <PriceRange/>
      </div>

        <button
          className="btn border border-gray border-2 bg-black text-white"
          type="button"
          id="dropdownMenuButton2"
          style={{ width: "120px", marginLeft: "30px", display:"inline-block"}}
        >
          Search Now
        </button>
      </div>

     
         

     {properties.map((House) =>
      <div className="card bg-dark text-white mx-4 mt-5" style={{width: "310px", height: "460px", display: "inline-block" }}>
        <img src={House.image} className="card-img-top" alt="..." style={{ height: "200px" }}></img>
          <div className="card-body">
            <ul className="list-group list-group-horizontal" style={{ fontSize: "11px", height: "30px", width: "270px" }}>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "110px", padding: "none"}}> Location:  <br></br> <p style={{textAlign: "center" }}> {House.location}</p></li>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "110px", padding: "none" }}>Type:<br></br> <p style={{textAlign: "center" }}> {House.type} </p> </li>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "100px", padding: "none" }}> Beds: {House.bedroom} <br></br>Baths: {House.bathroom}</li>
            </ul><br></br>
              <h5 className="card-title mt-1"> {House.price} </h5>
              <p className="card-text" style={{ fontSize: "15px" }}> {House.description}</p>
              <div>
             <button className="btn btn-secondary text-white">
              <Link to="/houses/propertypagedetail" style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>See More Detail</Link></button>
                </div>
          </div>
      </div>
            )
            }
      <RequestVisitButton />
    </>
  );
}

export default Houses;
