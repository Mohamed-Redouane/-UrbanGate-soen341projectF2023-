// REFERENCES
// [1] React Documentation: https://react.dev/learn

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

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
      <small style={{ fontWeight: "bold" }}>
        Price Range:<br></br>
      </small>
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
      ></input>
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
    </>
  );
};

const propertyTypeOptions = [
  { label: "Appartment", value: "Appartment" },
  { label: "Condo", value: "Condo" },
  { label: "House", value: "House" },
];

const bathsOptions = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3+", value: 3 },
];

const bedsOptions = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3+", value: 3 },
];

function Houses() {
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(
    []
  );
  const [selectedBaths, setSelectedBaths] = useState<number[]>([]);
  const [selectedBeds, setSelectedBeds] = useState<number[]>([]);

  const handlePropertyTypeChange = (selectedOptions: any) => {
    setSelectedPropertyTypes(
      selectedOptions.map((option: any) => option.value)
    );
  };

  const handleBathsChange = (selectedOptions: any) => {
    setSelectedBaths(selectedOptions.map((option: any) => option.value));
  };

  const handleBedsChange = (selectedOptions: any) => {
    setSelectedBeds(selectedOptions.map((option: any) => option.value));
  };

  return (
    <>
      <div className="dropdown mt-5 rounded border border-light border-3">
        <p style={{ fontWeight: "bold" }}>Search for available properties</p>
        <form style={{ width: "150px", display: "inline-block" }}>
          <label style={{ fontWeight: "bold" }}>Property Type</label>
          <Select
            isMulti
            options={propertyTypeOptions}
            onChange={handlePropertyTypeChange}
            value={propertyTypeOptions.filter((option) =>
              selectedPropertyTypes.includes(option.value)
            )}
          />
        </form>
        <form
          style={{
            width: "150px",
            display: "inline-block",
            marginLeft: "30px",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Number of Baths</label>
          <Select
            isMulti
            options={bathsOptions}
            onChange={handleBathsChange}
            value={bathsOptions.filter((option) =>
              selectedBaths.includes(option.value)
            )}
          />
        </form>
        <form
          style={{
            width: "150px",
            display: "inline-block",
            marginLeft: "30px",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Number of Beds</label>
          <Select
            isMulti
            options={bedsOptions}
            onChange={handleBedsChange}
            value={bedsOptions.filter((option) =>
              selectedBeds.includes(option.value)
            )}
          />
        </form>

        <div
          className="PriceRange"
          style={{
            marginLeft: "40px",
            display: "inline-block",
            width: "150px",
          }}
        >
          <PriceRange />
        </div>

        <button
          className="btn border border-gray border-2 bg-black text-white"
          type="button"
          style={{
            width: "120px",
            marginLeft: "30px",
            display: "inline-block",
          }}
        >
          Search Now
        </button>
      </div>

      {House.map((House) => (
        <div
          className="card bg-dark text-white mx-4 mt-5"
          style={{ width: "310px", height: "460px", display: "inline-block" }}
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
