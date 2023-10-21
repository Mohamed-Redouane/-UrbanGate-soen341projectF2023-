import MortgageCalculator from "./MortgageCalculator";
import RequestVisitButton from "./RequestVisitButton";
import { useParams} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import "./Houses.css"; 
//import { useLocation } from 'react-router-dom';



function PropertyPageDetail() {

//const {index} = useParams();
const [property, setProperty] = useState({title: "string", description: "string", type: "string", price: "string", location: "string", area: "string", bedroom: "string", bathroom: "string", status:"string", imageUrl: "string"});

const {_id} = useParams();
const userID = localStorage.getItem("UserID");
console.log(userID);
const getProperty = () => {
  axios.get(`http://localhost:3000/readPropertyID/${_id}`).then((response) => {

  setProperty(response.data);
  console.log(response.data);
  console.log(response.data.title);
  console.log(property.title);
 }).catch((error) => {
   console.log(error);
 });
}

useEffect(() => {

  getProperty();

}, []);



/*
useEffect(() =>  {
  
  axios.get(`http://localhost:3000/readPropertyID/${_id}`).then((response) => {

   setProperty(response.data);
   console.log(response.data);
   console.log(response.data.title);
   console.log(property);
  }).catch((error) => {
    console.log(error);
  });
}, [_id]);
*/
  return (
    <>
    <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p>Type: {property.type}</p>
          <p>Location: {property.location}</p>
          <p>Area: {property.area}</p>
          <p>Status: {property.status}</p>
          <p>Price: ${property.price}</p>
          <p>Beds: {property.bedroom}</p>
          <p>Baths: {property.bathroom}</p>
          <img src={property.imageUrl} style={{ width: '400px', height: '400px' }}></img>

      <div>
        <RequestVisitButton />
        <MortgageCalculator />
      </div>
    </>
  );
}

export default PropertyPageDetail;
