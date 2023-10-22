// REFERENCES
// [1] React Documentation: https://react.dev/learn

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./Houses.css";
import axios from 'axios';


const PriceRange = () => {
  const [minValue, setMinValue] = useState("0");
  const [maxValue, setMaxValue] = useState("1000000");
  return (
    <>
      <div className="priceRange" style={{ width: "200px"}}>
        <p style={{ fontSize: "10px", margin:0}}>
          ${minValue}-${maxValue}
        </p>
        <small>min:</small>
        <input
          type="range"
          className="form-range"
          min={0}
          max={1000000}
          step={10000}
          id="myRange"
          style={{ width: "100px" }}
          value={minValue}
          onChange={(event) => setMinValue(event.target.value)}
        ></input><br></br>
        <small>max:</small>
        <input
          type="range"
          className="form-range"
          min={0}
          max={1000000}
          step={10000}
          id="myRange"
          style={{ width: "100px" }}
          value={maxValue}
          onChange={(event) => setMaxValue(event.target.value)}
        ></input>
      </div>
    </>
  );
};

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


function Houses() {

  const [selectedPropertyType, setSelectedPropertyTypes] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBath, setSelectedBaths] = useState('');
  const [selectedBed, setSelectedBeds] = useState('');
  const [selectedDimension, setSelectedDimensions] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(''); 

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
  }

  //[1], functional component
  const [properties, setProperties] = useState<any[]>([]);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  
  const getHouses = () => {
    axios.get('http://localhost:3000/readProperty').then((response) => {
      setProperties(response.data);
      setFilteredProperties(response.data);
      //console.log(response.data);

      Object.values(properties).map((x) => { console.log(x) });
      console.log(Array.isArray(response.data));

    }).catch((error) => {
      console.log(error);
    });


  }


  /** 
   * This function filters the properties
   * The ".filter()" goes through all the elements (properties) in the array:
   * If the property in question satisfies the below conditions in the callback, then it is placed in a new array
   * This new array will then be returned and assigned to the array variable that is displayed in the frontend
  **/
  const filterProperties = () => {
    setFilteredProperties(properties.filter((property) => {
      let typeFilter, locationFilter, bathFilter, bedFilter, dimensionsFilter;
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
      return typeFilter && locationFilter && bathFilter && bedFilter && dimensionsFilter;
    }));
  }

  useEffect(() => { getHouses() }, []); //the [] is necessary in order to only load once

/* https://getbootstrap.com/docs/5.0/components/card/ */
  return (
    <>
      <div className="filter-box">
      <div className="image">
          <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/01/Airy-biophilic-interior-design-Wanda-P.jpg" style={{height: "400px", borderTopRightRadius: "20px", borderBottomRightRadius:"20px"}}></img>
        </div>
        <p className="filter-box-title">Search for available properties &nbsp;&nbsp;&nbsp;</p>
        <div className="status">
        <input type="checkbox" value="ForSale" onChange={handleStatusChange}></input>
        <label>&nbsp;&nbsp;For Sale &nbsp;&nbsp;</label>
        <input type="checkbox" value="ForSale" onChange={handleStatusChange}></input>
        <label>&nbsp;&nbsp;For Rent</label><br></br>
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
          <td>
          <Select
                options={locationOptions}
                onChange={handleLocationChange}
              />
          </td>
          <td>
          <Select
                options={propertyTypeOptions}
                onChange={handlePropertyTypeChange}
              />
          </td>
          <td>
          <Select
                options={bedsOptions}
                onChange={handleBedsChange}
              />
          </td>
          <td>
          <Select
                options={bathsOptions}
                onChange={handleBathsChange}
              />
          </td>
          <td>
          <Select
                options={dimensionsOptions}
                onChange={handleDimensionChange}
              />
          </td>
          <td>
          <PriceRange/>
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

      {filteredProperties.map((property) =>
        <div className="card bg-dark text-white mx-4 mt-5" style={{ width: "310px", height: "460px", display: "inline-block" }}>
          <img src={property.image} className="card-img-top" alt="..." style={{ height: "200px" }}></img>
          <div className="card-body">
            <ul className="list-group list-group-horizontal" style={{fontSize: "11px", height: "30px", width: "280px", padding: 0}}>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "100px", padding:"8px" }}> Location:  <br></br> <p style={{ textAlign: "center" }}> {property.location}</p></li>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "90px", padding:"8px" }}>Type:<br></br> <p style={{ textAlign: "center" }}> {property.type} </p> </li>
              <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "100px", padding:"8px" }}> {property.bedroom} <br></br>{property.bathroom}</li>
            </ul><br></br>
            <h5 className="card-title mt-1"> ${property.price} </h5>
            <p className="card-text" style={{ fontSize: "12px" }}> {property.description}</p>
            <div>
              <button className="btn btn-secondary text-white">
                <Link to={`/houses/propertypagedetail/${property._id}`} style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>See More Detail</Link></button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Houses;
