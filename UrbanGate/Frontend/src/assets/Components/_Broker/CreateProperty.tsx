import { useState } from "react";
import axios from "axios";
import Select from "react-select";
import { toast } from "react-toastify";
import "./CreatePropertyStyle.css";
import "react-toastify/dist/ReactToastify.css";

function ManagingProperties() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [types, setTypes] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleTypesChange = (selectedOption: any) => {
    //the :any
    setTypes(selectedOption.value);
  };
  const handleLocationChange = (selectedOption: any) => {
    setLocation(selectedOption.value);
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleDimensionChange = (selectedOption: any) => {
    setArea(selectedOption.value);
  };
  const handleBedroomChange = (selectedOption: any) => {
    setBedroom(selectedOption.value);
  };
  const handleStatusChange = (selectedOption: any) => {
    setStatus(selectedOption.value);
  };
  const handleBathroomChange = (selectedOption: any) => {
    setBathroom(selectedOption.value);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const bedOptions = [
    { value: "1 bedroom", label: "1 bed" },
    { value: "2 bedrooms", label: "2 beds" },
    { value: "3+ bedrooms", label: "3+ beds" },
  ];
  const areaOptions = [
    { label: "500-1000 sqft", value: "500-1000 sqft" },
    { label: "1000-1500 sqft", value: "1000-1500 sqft" },
    { label: "1500-1800 sqft", value: "1500-1800 sqft" },
    { label: "1800+ sqft", value: "1800+ sqft" },
  ];
  const locationOptions = [
    { label: "Downtown", value: "Downtown" },
    { label: "Griffintown", value: "Griffintown" },
    { label: "Mont-Royal", value: "Mont-Royal" },
    { label: "Saint-Laurent", value: "Saint-Laurent" },
    { label: "NDG", value: "NDG" },
    { label: "Angrignon", value: "Angrignon" },
    { label: "Mile-End", value: "Mile-End" },
  ];
  const typeOptions = [
    { label: "Appartment", value: "apartment" },
    { label: "Condo", value: "condo" },
    { label: "House", value: "house" },
  ];
  const bathOptions = [
    { value: "1 bathroom", label: "1 bathroom" },
    { value: "2 bathrooms", label: "2 bathrooms" },
    { value: "3+ bathrooms", label: "3+ bathrooms" },
  ];

  const statusOptions = [
    { value: "for_sale", label: "For Sale" },
    { value: "for_rent", label: "For Rent" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      image: image,
      type: types,
      location: location,
      price: price,
      area: area,
      bedroom: bedroom,
      bathroom: bathroom,
      status: status,
      userID: window.localStorage.getItem("UserID"),
    };
    axios
      .post("http://localhost:3000/createProperty", data) //https://www.youtube.com/watch?v=enOsPhp2Z6Q at 28:12
      .then((res) => {
        toast.success(res.data.popup);
      })
      .catch((err) => toast.error(err.response.data.popup)); //you have to write err.response because the data is treated differently than in the .then
  }; 
  return (
    <div className="container" id="CreatePropertyPage">
      <form onSubmit={handleSubmit}>
        <h2>Create Property</h2>
        <div className="fields-container">
          <label> Title </label>
          <input
            type="title"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
            placeholder="Enter Title"
          />
        </div>
        <div className="fields-container">
          <label> Description </label>
          <input
            type="description"
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            required
            placeholder="Enter Description"
          />
        </div>

        <div className="fields-container">
          <label> Types</label>
          <p> {types}</p>
          <Select options={typeOptions} onChange={handleTypesChange} required />
        </div>

        <div className="fields-container">
          <label> Location </label>
          <Select
            options={locationOptions}
            onChange={handleLocationChange}
            required
          />
        </div>

        <div className="fields-container">
          <label htmlFor="quantity">Price:</label>
          <p style={{ fontSize: "11px", padding: 0, margin: 0 }}>
            {" "}
            If this property is for rent, enter the price/month
          </p>
          <input
            type="number"
            id="quantity"
            name="price"
            min="0"
            value={price}
            onChange={handlePriceChange}
            required
            placeholder="Price for Sale or Price/month"
          />
        </div>

        <div className="fields-container">
          <label htmlFor="quantity">Area</label>
          <Select
            options={areaOptions}
            onChange={handleDimensionChange}
            required
          />
        </div>

        <div className="fields-container">
          <label htmlFor="quantity">Bedrooms</label>
          <Select
            options={bedOptions}
            onChange={handleBedroomChange}
            required
          />
        </div>

        <div className="fields-container">
          <label htmlFor="quantity">Bathrooms</label>
          <Select
            options={bathOptions}
            onChange={handleBathroomChange}
            required
          />
        </div>

        <div className="fields-container">
          <label> Status:</label>
          <Select
            options={statusOptions}
            onChange={handleStatusChange}
            required
          />
        </div>

        <div className="fields-container">
          <label> Image:</label>
          <input
            name="image"
            value={image}
            onChange={handleImageChange}
            required
            placeholder="Enter Status"
          />
        </div>

        <button type="submit">Create Property</button>
      </form>
    </div>
  );
}

export default ManagingProperties;
