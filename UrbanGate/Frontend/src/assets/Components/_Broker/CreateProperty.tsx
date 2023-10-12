import {useState} from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie';

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
  const handleTypesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypes(e.target.value);
  };
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArea(e.target.value);
  };
  const handleBedroomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBedroom(e.target.value);
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };
  const handleBathroomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBathroom(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

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
                    <input
                        type="types"
                        id="types"
                        name="types"
                        value={types}
                        onChange={handleTypesChange}
                        required
                        placeholder="Enter Type"
                    />
                </div>

                <div className="fields-container">
                    <label> Location </label>
                    <input
                        type="location"
                        id="location"
                        name="location"
                        value={location}
                        onChange={handleLocationChange}
                        required
                        placeholder="Enter Location"
                    />
                </div>

                <div className="fields-container">
                    <label htmlFor="quantity">Price:</label>
                    <input type="number"
                     id="quantity"
                     name="price"
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
                    <input type="number"
                     id="quantity"
                     name="bedroom"
                    value={bedroom}
                    onChange={handleBedroomChange}
                    required
                    placeholder="Enter # bedrooms"/>
                </div>

                <div className="fields-container">
                    <label htmlFor="quantity">Bathrooms</label>
                    <input type="number"
                     id="quantity"
                     name="bathroom"
                    value={bathroom}
                    onChange={handleBathroomChange}
                    required
                    placeholder="Enter # bathrooms"/>
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