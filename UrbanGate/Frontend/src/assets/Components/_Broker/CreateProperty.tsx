import {useState} from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Select from "react-select";

function ManagingProperties() {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [types,setTypes]=useState('');
const [location,setLocation]=useState('');
const [price,setPrice]=useState('');
const [area,setArea]=useState('');
const [bedroom,setBedroom]=useState('');
const [bathroom,setBathroom]=useState('');
const [status,setStatus]=useState('');
const [image,setImage]=useState('');

const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArea(e.target.value);
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };
  const handleTypesChange = (selectedOption : any) => { 
    setTypes(selectedOption.value);
  };
  const handleLocationChange = (selectedOption : any) => { 
    setLocation(selectedOption.value);
  };
  const handleBedroomChange = (selectedOption : any) => { 
    setBedroom(selectedOption.value);
  };
  const handleBathroomChange = (selectedOption : any) => { 
    setBathroom(selectedOption.value);
  };

  const bedOptions = [
    {value: "1 bed", label:"1 bed"},
    {value: "2 beds", label:"2 beds"},
    {value: "3 beds", label:"3 beds"},
    {value: "3+ beds", label:"3+ beds"},
  ]; 

  const bathOptions = [
    {value: "1 bathroom", label:"1 bathroom"},
    {value: "2 bathrooms", label:"2 bathrooms"},
    {value: "3 bathrooms", label:"3 bathrooms"},
    {value: "3+ bathrooms", label:"3+ bathrooms"},
  ]; 

  const typeOptions = [
    { label: "Appartment", value: "Appartment" },
    { label: "Condo", value: "Condo" },
    { label: "House", value: "House" },
  ];

  const locationOptions = [
    { label: "Downtown", value: "Downtown" },
    { label: "Griffintown", value: "Griffintown"},
    { label: "Mont-Royal", value: "Mont-Royal" },
    { label: "Saint-Laurent", value: "Saint-Laurent" },
    { label: "NDG", value: "NDG" },
    { label: "Angrignon", value: "Angrignon" },
    { label: "Mile-End", value: "Mile-End" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {title: title, description: description,image: image, type : types, location: location, price: price, area: area, bedroom: bedroom, bathroom: bathroom, status: status, userID: window.localStorage.getItem("UserID")};
    
      await axios.post("http://localhost:3000/createProperty", data).then((res)=>{
        alert("success")
       
      }).catch((res)=> alert(res) );
      
  }

    return (
        <div className="container">
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
                    <label> Types</label>
                      <Select 
                      options={typeOptions} 
                      onChange={handleTypesChange}
                      required
                      />
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
                    <input type="number"
                     id="quantity"
                     name="price"
                     min="0"
                    value={price}
                    onChange={handlePriceChange}
                    required
                    placeholder="Enter Price"/>
                </div>

                <div className="fields-container">
                    <label htmlFor="quantity">Area</label>
                    <input type="area"
                     id="area"
                     name="area"
                    value={area}
                    onChange={handleAreaChange}
                    required
                    placeholder="Enter Area"/>
                </div>

                <div className="fields-container">
                    <label htmlFor="quantity">Bedrooms</label>
                    <Select 
                    options={bedOptions} 
                    onChange={handleBedroomChange}
                    required/>
                </div>

                <div className="fields-container">
                    <label htmlFor="quantity">Bathrooms</label>
                    <Select 
                    options={bathOptions} 
                    onChange={handleBathroomChange}
                    required/>
                </div>

                <div className="fields-container">
                    <label> Status:</label>
                    <input type="status"
                    id="status"
                    name="status"
                    value={status}
                    onChange={handleStatusChange}
                    required
                    placeholder="Enter Status"/>
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
                    <label> Image:</label>
                    <input 
                    name="image"
                    value={image}
                    onChange={handleImageChange}
                    required
                    placeholder="Enter Status"/>
                </div>

                <button type="submit">Create Property</button>
            </form>
        </div>

    )



}

export default ManagingProperties;