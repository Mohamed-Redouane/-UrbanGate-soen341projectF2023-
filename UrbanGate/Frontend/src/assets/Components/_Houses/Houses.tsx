// REFERENCES
// [1] React Documentation: https://react.dev/learn

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./Houses.css"; 

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
  {
    id: 1,
    imageUrl:
      "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
    price: "$500,000",
    Location: "Downtown",
    Type: "Appartment",
    NumberOfBaths: 2,
    NumberofBeds: 3,
    Description: "This space is to describe briefly the property.",
  },
  {
    id: 2,
    imageUrl:
      "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp",
    price: "$650,000",
    Location: "Saint-Laurent",
    Type: "Condo",
    NumberOfBaths: 1,
    NumberofBeds: 2,
    Description: "This space is to describe briefly the property.",
  },
  {
    id: 3,
    imageUrl:
      "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
    price: "$850,000",
    Location: "Mont-Royal",
    Type: "House",
    NumberOfBaths: 1,
    NumberofBeds: 2,
    Description: "This space is to describe briefly the property.",
  },
  {
    id: 4,
    imageUrl:
      "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp",
    price: "$850,000",
    Location: "Mont-Royal",
    Type: "House",
    NumberOfBaths: 1,
    NumberofBeds: 2,
    Description: "This space is to describe briefly the property.",
  },
];

const PriceRange = () => {
  const [minValue, setMinValue] = useState("0");
  const [maxValue, setMaxValue] = useState("1000000");
  return (
    <>
    <div className="priceRange" style={{width:"200px", marginLeft:"40px"}}>
      <p style={{fontSize: "15px", fontWeight: "bold", marginBottom: "none"}}>
        Price Range:</p>
      <p style={{ fontSize: "10px" }}>
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
  { label: "Downtown", value: "Downtown" },
  { label: "Griffintown", value: "Griffintown"},
  { label: "Mont-Royal", value: "Mont-Royal" },
  { label: "Saint-Laurent", value: "Saint-Laurent" },
  { label: "NDG", value: "NDG" },
  { label: "Angrignon", value: "Angrignon" },
  { label: "Mile-End", value: "Mile-End" },
];

const propertyTypeOptions = [
  { label: "Appartment", value: "Appartment" },
  { label: "Condo", value: "Condo" },
  { label: "House", value: "House" },
];

const bathsOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3+", value: 3 },
];

const bedsOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3+", value: 3 },
];

const dimensionsOptions = [
  { label: "500-1000 sqft", value: "500-1000 sqft" },
  { label: "1000-1500 sqft", value: "1000-1500 sqft" },
  { label: "1500-1800 sqft", value: "1500-1800 sqft" },
  { label: "1800+ sqft", value: "1800+ sqft" },
];


function Houses() {
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]); 
  const [selectedBaths, setSelectedBaths] = useState<number[]>([]);
  const [selectedBeds, setSelectedBeds] = useState<number[]>([]);
  const [selectedDimensions, setSelectedDimensions] = useState<string[]>([]);

  const handleLocationChange = (selectedOptions: any) => {
    setSelectedLocation(selectedOptions.map((option: any) => option.value));
  };

  const handlePropertyTypeChange = (selectedOptions: any) => { 
    setSelectedPropertyTypes(selectedOptions.map((option: any) => option.value));
  };

  const handleBathsChange = (selectedOptions: any) => {
    setSelectedBaths(selectedOptions.map((option: any) => option.value));
  };

  const handleBedsChange = (selectedOptions: any) => {
    setSelectedBeds(selectedOptions.map((option: any) => option.value));
  };

  const handleDimensionChange = (selectedOptions: any) => {
    setSelectedDimensions(selectedOptions.map((option: any) => option.value));
  };

  return (
    <>
      <div className="filter-box">
        <p className="filter-box-title">Search for available properties</p>
        <div className="box">
        <div className="search-now">
        <button style={{
          width: "120px",
          marginLeft:"1300px",
          marginTop:"190px", 
          height:"50px", 
          fontSize:"14px", 
          position: "fixed"
        }}> Search Now </button>
        </div>
       <div className="filter">
        <form className="filter-form">
          <label className="label">Location</label>
          <Select
            isMulti
            options={locationOptions}
            onChange={handleLocationChange}
            value={locationOptions.filter((option) =>
              selectedLocation.includes(option.value)
            )}
          />
        </form>
        </div>
       
        <div className="filter">
        <form className="filter-form">
          <label className="label">Property Type</label>
          <Select
            isMulti
            options={propertyTypeOptions}
            onChange={handlePropertyTypeChange}
            value={propertyTypeOptions.filter((option) =>
              selectedPropertyTypes.includes(option.value)
            )}
          />
        </form>
        </div>

        <div className="filter" style={{display:"inline-block"}}>
        <form className="filter-form">
          <label className="label">Number of Baths</label>
          <Select
            isMulti
            options={bathsOptions}
            onChange={handleBathsChange}
            value={bathsOptions.filter((option) =>
              selectedBaths.includes(option.value)
            )}
          />
        </form>
        </div>

        <div className="filter" style={{display:"inline-block"}}>
        <form className="filter-form">
          <label className="label">Number of Beds</label>
          <Select
            isMulti
            options={bedsOptions}
            onChange={handleBedsChange}
            value={bedsOptions.filter((option) =>
              selectedBeds.includes(option.value)
            )}
          />
        </form>
        </div>

        <div className="filter">
        <form className="filter-form">
          <label className="label">Dimensions</label>
          <Select
            isMulti
            options={dimensionsOptions}
            onChange={handleDimensionChange}
            value={dimensionsOptions.filter((option) =>
              selectedDimensions.includes(option.value)
            )}
          />
        </form>
        </div>

        <div className="filter">
          <PriceRange />
        </div>
      
      </div>
      </div>
 

      {House.map((House) => (
        <div
          className="card bg-dark text-white mx-4 mt-5"
          style={{ width: "310px", height: "460px", display: "inline-block", position: "relative" }}
        >
          <img
            src={House.imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          ></img>
          <div className="card-body">
            <ul
              className="list-group list-group-horizontal"
              style={{ fontSize: "11px", height: "30px", width: "270px" }}
            >
              <li
                className="list-group-item bg-dark text-white rounded-0 pt-0"
                style={{
                  borderTop: "none",
                  borderBottom: "none",
                  width: "110px",
                  padding: "none",
                }}
              >
                {" "}
                Location: <br></br>{" "}
                <p style={{ textAlign: "center" }}> {House.Location}</p>
              </li>
              <li
                className="list-group-item bg-dark text-white rounded-0 pt-0"
                style={{
                  borderTop: "none",
                  borderBottom: "none",
                  width: "110px",
                  padding: "none",
                }}
              >
                Type:<br></br>{" "}
                <p style={{ textAlign: "center" }}> {House.Type} </p>{" "}
              </li>
              <li
                className="list-group-item bg-dark text-white rounded-0 pt-0"
                style={{
                  borderTop: "none",
                  borderBottom: "none",
                  width: "100px",
                  padding: "none",
                }}
              >
                {" "}
                Beds: {House.NumberofBeds} <br></br>Baths: {House.NumberOfBaths}
              </li>
            </ul>
            <br></br>
            <h5 className="card-title mt-1"> {House.price} </h5>
            <p className="card-text" style={{ fontSize: "15px" }}>
              {" "}
              {House.Description}
            </p>
            <div>
              <button className="btn btn-secondary text-white">
                <Link
                  to="/houses/propertypagedetail"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  See More Detail
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Houses;
