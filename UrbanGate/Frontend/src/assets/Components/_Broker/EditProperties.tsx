import {useParams} from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from "react";
import React from 'react';
import {useNavigate} from "react-router-dom"; 
import  Select from 'react-select'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
function EditProperties(){

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
    //const [property, setProperty] = useState({title: "string", description: "string", type: "string", price: "string", location: "string", area: "string", bedroom: "string", bathroom: "string", status:"string", imageUrl: "string"});
    const {_id} = useParams();
    const navigate = useNavigate();

      const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      };
      const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
      };
      const handleTypesChange = (selectedOption : any) => { 
        setTypes(selectedOption.value);
      };
      const handleLocationChange = (selectedOption : any) => { 
        setLocation(selectedOption.value);
      };
      const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
      };
      const handleDimensionChange = (selectedOption : any) => { 
        setArea(selectedOption.value);
      };
      const handleBedroomChange = (selectedOption : any) => { 
        setBedroom(selectedOption.value);
      };
      const handleStatusChange = (selectedOption: any) => {
        setStatus(selectedOption.value);
      };
      const handleBathroomChange = (selectedOption : any) => { 
        setBathroom(selectedOption.value);
      };
    
      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.value);
      };
      
      const bedOptions = [
        {value: "1 bedroom", label:"1 bed"},
        {value: "2 bedrooms", label:"2 beds"},
        {value: "3+ bedrooms", label:"3+ beds"},
      ];
      const areaOptions = [
        { label: "500-1000 sqft", value: "500-1000 sqft" },
        { label: "1000-1500 sqft", value: "1000-1500 sqft" },
        { label: "1500-1800 sqft", value: "1500-1800 sqft" },
        { label: "1800+ sqft", value: "1800+ sqft" },
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
    
      const typeOptions = [
        { label: "Appartment", value: "apartment" },
        { label: "Condo", value: "condo" },
        { label: "House", value: "house" },
      ];
    
      const bathOptions = [
        {value: "1 bathroom", label:"1 bathroom"},
        {value: "2 bathrooms", label:"2 bathrooms"},
        {value: "3+ bathrooms", label:"3+ bathrooms"},
      ];
    
      const statusOptions = [
        {value: "for_sale", label:"For Sale"},
        {value: "for_rent", label:"For Rent"},
      ];

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {title: title, description: description,image: image, type : types, location: location, price: price, area: area, bedroom: bedroom, bathroom: bathroom, status: status, propertyID: _id};
        console.log(data.propertyID);
        axios.post("https://urbangatebackend-production-1218.up.railway.app/updateProperty", data) //https://www.youtube.com/watch?v=enOsPhp2Z6Q at 28:12
        .then(()=> {toast.success("Property updated successfully"); //
        window.location.reload();
    })
        .catch((res)=> toast.error("Error updating property: " + res));
        //console.log(email +  "" + password +"" + name+""   + role);
      }

    const getProperty = () => {

        axios.get(`https://urbangatebackend-production-1218.up.railway.app/readPropertyID/${_id}`) //https://www.youtube.com/watch?v=enOsPhp2Z6Q at 28:12
        .then((response) => {
            //setProperty(response.data);
            //setTitle(response.data.title);
            //setDescription(response.data.description);
            setLocation(response.data.location);
            console.log(location)
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getProperty();
    }, []);

    const handleNo = () => {
      navigate("/broker/ManageProperties");
    }


    return (
      <div className="container">
          <form onSubmit={handleSubmit}>
              <h2>Edit Property</h2>
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
                  <Select 
                    options={typeOptions} 
                    onChange={handleTypesChange}
                    required
                    />
              </div>

              <div className="fields-container">
                  <label> Location </label>
                  {/*https://simplefrontend.com/default-value-for-select-elements-in-react/ */}
                  <Select 
                      options={locationOptions}   
                      //defaultValue={{ label: location, value: location }} 
                      onChange={handleLocationChange} 
                      required
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
                  placeholder="Enter Status"/>
              </div>
              <button type="submit">Confirm Changes</button>
              <button onClick={handleNo}>Cancel</button>
          </form>
      </div>
  )
}

export default EditProperties;