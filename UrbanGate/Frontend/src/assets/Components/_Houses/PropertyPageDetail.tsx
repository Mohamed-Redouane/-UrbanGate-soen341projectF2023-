import MortgageCalculator from "./MortgageCalculator";
import RequestVisitButton from "./RequestVisitButton";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import "./PropertyPageDetail.css";
//import { useLocation } from 'react-router-dom';



function PropertyPageDetail() {

  //const {index} = useParams();
  const [property, setProperty] = useState({ title: "string", description: "string", type: "string", price: "string", location: "string", area: "string", bedroom: "string", bathroom: "string", status: "string", image: "string" });

  const { _id } = useParams();

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
  
 /* https://www.w3schools.com/howto/howto_css_two_columns.asp*/


 
  return (
    <>
      <div className="row"> 
        <div className="column1">
        <div className="property-title">
            <p>{property.title}</p>
            <p className="status-display">{property.status}</p>
          </div>
          <div className="property-image">
            <img src={property.image} height={"400px"} width={"600px"}></img>
          </div>
          <table className="button-display">
           <tr className="button-display-row">
            <td className="button-display-column"> <RequestVisitButton/> </td>
            <td className="button-display-column"> <MortgageCalculator/> </td>
            </tr>
          </table>
          
        </div>
        <div className="column2">
          <div className="detail-box">
            <div className="property-price">
            <p>${property.price}</p>
            </div>
          <div className="property-detail">
          <div className="property-description">
            <p>{property.description}</p>
          </div>
          <p className="detail"> Property Summary</p>
          <table className="detail-table">
            <tr className="detail-row">
              <td className="detail-column"> <p>Type: {property.type}</p> </td>
              <td className="detail-column"> <p>Beds: {property.bedroom}</p></td>
            </tr>
            <tr className="detail-row"> 
            <td className="detail-column">  <p>Location: {property.location}</p> </td>
              <td className="detail-column"> <p>Baths: {property.bathroom}</p></td>
            </tr>
            <tr className="detail-row">
              <td className="detail-column"> <p>Area: {property.area}</p></td>
            </tr>
          </table>
          </div>
        </div>
        </div>
        
        </div>
        


      
    </>
  );
}


export default PropertyPageDetail;
