// REFERENCES
// [1] React Documentation: https://react.dev/learn

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./Houses.css";
import axios from 'axios';


const locationOptions = [
  { label: "Any", value: '' },
  { label: "Downtown", value: "Downtown" },
  { label: "Griffintown", value: "Griffintown" },
  { label: "Mont-Royal", value: "Mont-Royal" },
  { label: "Saint-Laurent", value: "Saint-Laurent" },
  { label: "NDG", value: "NDG" },
  { label: "Angrignon", value: "Angrignon" },
  { label: "Mile-End", value: "Mile-End" },
];

const propertyTypeOptions = [
  { label: "Any", value: "" },
  { label: "Appartment", value: "apartment" },
  { label: "Condo", value: "condo" },
  { label: "House", value: "house" },
];

const bathsOptions = [
  { label: "Any", value: '' },
  { label: "1", value: '1 bathroom' },
  { label: "2", value: '2 bathrooms' },
  { label: "3+", value: '3+ bathrooms' },
];

const bedsOptions = [
  { label: "Any", value: "" },
  { label: "1", value: '1 bedroom' },
  { label: "2", value: '2 bedrooms' },
  { label: "3+", value: '3+ bedrooms' },
];

const dimensionsOptions = [
  { label: "Any", value: "" },
  { label: "500-1000 sqft", value: "500-1000 sqft" },
  { label: "1000-1500 sqft", value: "1000-1500 sqft" },
  { label: "1500-1800 sqft", value: "1500-1800 sqft" },
  { label: "1800+ sqft", value: "1800+ sqft" },
];

const buyerPriceRangeOptions = [
  { label: "Any", value: "" },
  { label: "0-200000$", value: "0-200000$" },
  { label: "200000-400000$", value: "200000-400000$" },
  { label: "400000-600000$", value: "400000-600000$" },
  { label: "600000-800000$", value: "600000-800000$" },
  { label: "800000-1000000$", value: "800000-1000000$" },
  { label: "1000000$+", value: "1000000$+" },
]; 

const renterPriceRangeOptions = [
  { label: "Any", value: "" },
  { label: "0-500$/mo", value: "0-500$/mo" },
  { label: "500-800$/mo", value: "500-800$/mo" },
  { label: "800-1000$/mo", value: "800-1000$/mo"},
  { label: "1000-1200$/mo", value: "1000-1200$/mo" },
  { label: "1200$+/mo", value: "1200$+/mo" },
];

const emptyPriceRangeOptions = [
  {label: "", value: "" },
];

function Houses() {
  const [selectedPropertyType, setSelectedPropertyTypes] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBath, setSelectedBaths] = useState('');
  const [selectedBed, setSelectedBeds] = useState('');
  const [selectedDimension, setSelectedDimensions] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(''); 
  const [selectedRangePrice, setSelectedRangePrice] = useState(''); 

  const handleLocationChange = (selectedOptions: any) => {
    setSelectedLocation(selectedOptions.value);
  };

  const handlePropertyTypeChange = (selectedOptions: any) => {
    setSelectedPropertyTypes(selectedOptions.value);
  };

  const handleBathsChange = (selectedOptions: any) => {
    setSelectedBaths(selectedOptions.value);
  };

  const handleBedsChange = (selectedOptions: any) => {
    setSelectedBeds(selectedOptions.value);
  };

  const handleDimensionChange = (selectedOptions: any) => {
    setSelectedDimensions(selectedOptions.value);
  };

  const handleStatusChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStatus(e.target.value);
    setSelectedRangePrice(''); 
  }

  const handlePriceRangeChange = (selectedOptions: any) => {
    setSelectedRangePrice(selectedOptions.value);
  }

  //[1], functional component
  const [properties, setProperties] = useState<any[]>([]);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  
  const getHouses = () => {
    axios.get('http://localhost:3000/readProperty') //https://www.youtube.com/watch?v=enOsPhp2Z6Q at 28:12
    .then((response) => {
      setProperties(response.data);
      setFilteredProperties(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  }


  /** 
   * This function filters the properties
   * The ".filter()" goes through all the elements (properties) in the array:
   * If the property in question satisfies the below conditions in the callback, then it is placed in a new array
   * This new array will then be returned and assigned to the array variable that is displayed in the frontend
   * https://stackoverflow.com/questions/32040396/how-to-use-es6-fat-arrow-to-filter-an-array-of-objects
  */
  const filterProperties = () => {
    setFilteredProperties(properties.filter((property) => {
      let typeFilter, locationFilter, bathFilter, bedFilter, dimensionsFilter, buyerRangeFilter, statusFilter;
      if (selectedPropertyType === '') { typeFilter = true; }
      else { typeFilter = property.type === selectedPropertyType; }
      if (selectedLocation === '') { locationFilter = true; }
      else { locationFilter = property.location === selectedLocation; }
      if (selectedBath === '') { bathFilter = true; }
      else { bathFilter = property.bathroom === selectedBath; }
      if (selectedBed === '') { bedFilter = true; }
      else { bedFilter = property.bedroom === selectedBed; }
      if (selectedDimension === '') { dimensionsFilter = true; }
      else { dimensionsFilter = property.area === selectedDimension; }
      if (selectedStatus === '') { statusFilter = true}
      else { statusFilter = property.status === selectedStatus}
      if (selectedRangePrice === '') { buyerRangeFilter = true; }
      else { 
          if (selectedRangePrice === "0-200000$" && parseInt(property.price) <= 200000){
            buyerRangeFilter = true;}
          if (selectedRangePrice === "200000-400000$" && parseInt(property.price) >= 200000 && parseInt(property.price) <= 400000){
            buyerRangeFilter = true;}
          if (selectedRangePrice === "400000-600000$" && parseInt(property.price) >= 400000 && parseInt(property.price) <= 600000){
              buyerRangeFilter = true;}
          if (selectedRangePrice === "600000-800000$" && parseInt(property.price) >= 600000 && parseInt(property.price) <= 800000){
            buyerRangeFilter = true;}
          if (selectedRangePrice === "800000-1000000$" && parseInt(property.price) >= 800000 && parseInt(property.price) <= 1000000){
            buyerRangeFilter = true;}
          if (selectedRangePrice === "1000000$+" && parseInt(property.price) >= 1000000){
            buyerRangeFilter = true;}
          if (selectedRangePrice === "0-500$/mo" && parseInt(property.price) <= 500){
              buyerRangeFilter = true;}
          if (selectedRangePrice === "500-800$/mo" && parseInt(property.price) >= 500 && parseInt(property.price) <= 800){
              buyerRangeFilter = true;}
          if (selectedRangePrice === "800-1000$/mo" && parseInt(property.price) >= 800 && parseInt(property.price) <= 1000){
              buyerRangeFilter = true;}
          if (selectedRangePrice === "1000-1200$/mo" && parseInt(property.price) >= 1000 && parseInt(property.price) <= 1200){
              buyerRangeFilter = true;}
          if (selectedRangePrice === "1200$+/mo" && parseInt(property.price) >= 1200){
              buyerRangeFilter = true;}
          } 
      return typeFilter && locationFilter && bathFilter && bedFilter && dimensionsFilter && buyerRangeFilter && statusFilter;
    }));
  }

  useEffect(() => { getHouses() }, []);// Will only be called once on reload https://stackoverflow.com/questions/72824151/react-useeffect-keeps-fetching + https://www.tutorialspoint.com/how-to-call-the-loading-function-with-react-useeffect

/* https://getbootstrap.com/docs/5.0/components/card/ */
  return (
    <>
      <div className="filter-box">
      <div className="image">
          <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/01/Airy-biophilic-interior-design-Wanda-P.jpg" style={{height: "400px", borderTopRightRadius: "20px", borderBottomRightRadius:"20px"}}></img>
        </div>
        <p className="filter-box-title">Search for available properties &nbsp;&nbsp;&nbsp; <br/> <small className="specify-status">To select a price range, please click on for sale or for rent</small></p>
        <div className="status" style={{marginLeft:"50px"}}>
        <input type="radio" value="for_sale" name="status" onChange={handleStatusChange}></input>
        <label>&nbsp;&nbsp;For Sale &nbsp;&nbsp;</label>
        <input type="radio" value="for_rent" name="status" onChange={handleStatusChange}></input>
        <label>&nbsp;&nbsp;For Rent &nbsp;&nbsp;</label>
        <br></br>
        </div>
        <div className="filters">
        <table className="filter-table">
        <tr className="preferences">
          <td>Location</td>
          <td>Type</td>
          <td>Bedrooms</td>
          <td>Bathrooms</td>
          <td>Dimensions</td>
          <td>Price Range<br></br></td>
        </tr>
        <tr>
          <td className="select-options">
          <Select
                options={locationOptions}
                onChange={handleLocationChange}
              />
          </td>
          <td className="select-options">
          <Select
                options={propertyTypeOptions}
                onChange={handlePropertyTypeChange}
              />
          </td>
          <td className="select-options">
          <Select
                options={bedsOptions}
                onChange={handleBedsChange}
              />
          </td>
          <td className="select-options">
          <Select
                options={bathsOptions}
                onChange={handleBathsChange}
              />
          </td>
          <td className="select-options">
          <Select
                options={dimensionsOptions}
                onChange={handleDimensionChange}
              />
          </td>
          <td className="select-options">
          <Select
                className="price-range-options"
                options={
                  (selectedStatus === '') ? emptyPriceRangeOptions : (selectedStatus === "for_rent") ? renterPriceRangeOptions : buyerPriceRangeOptions}
                onChange={handlePriceRangeChange}
              />
          </td>
        </tr>
        </table>
        <button onClick={filterProperties} className="searchnow-button"
          style={{
            width: "150px",
            marginTop: "10px",
            marginLeft: "43%",
            height: "50px",
            fontSize: "14px",
          }}> Search Now
        </button>
      </div>
      </div>

      <div>
      {/*https://www.w3schools.com/jsref/jsref_map.asp + https://intellipaat.com/blog/map-in-react/ */}
      {/*https://getbootstrap.com/docs/5.0/components/card/*/}
      {filteredProperties.map((property) =>
          <div className="card bg-dark text-white mx-4 mt-5" style={{ width: "310px", height: "460px", display: "inline-block"}}>
          <div className="card-image"><img src={property.image} className="card-img-top" alt="..." style={{ height: "200px" }}></img></div>
          <div className="card-body">
            <ul className="list-group list-group-horizontal" style={{fontSize: "11px", height: "30px", width: "280px", padding: 0}}>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "100px", padding:"8px" }}> Location:  <br></br> <p style={{ textAlign: "center" }}> {property.location}</p></li>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "90px", padding:"8px" }}>Type:<br></br> <p style={{ textAlign: "center" }}> {property.type} </p> </li>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "100px", padding:"8px" }}> {property.bedroom} <br></br>{property.bathroom}</li>
            </ul><br></br>
            <p className="card-price"> {(property.status === "for_rent") ? <p>${property.price}/month</p> : <p>${property.price}</p> } <p className="card-status">{property.status}</p></p>
            <p className="card-text" style={{ fontSize: "12px" }}> {property.description}</p>
            <div>
              <button className="btn btn-secondary text-white">
                <Link to={`/houses/propertypagedetail/${property._id}`} style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>See More Detail</Link></button>
            </div> {/*https://www.youtube.com/watch?v=enOsPhp2Z6Q at 36:39*/}
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default Houses;
