import React from 'react'; 
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useCookies } from 'react-cookie';

function CreateBroker(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('broker');
  
    const success = () => {
      alert("SUCCESS");
    }
  const navigate = useNavigate();
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
  
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    }
  
    const handleRoleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
      setRole(e.target.value);
    }
  
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = {email: email, name: name, password: password, role: role};
      axios.post("http://localhost:3000/createUser", data)
      .then(()=> alert("SUCCESS"))
      .catch((res)=> alert("Error code: " + res));
      //console.log(email +  "" + password +"" + name+""   + role);
    }

    return(
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h2>Create Broker</h2>
            <div className="fields-container">
              <label htmlFor = "email">Email </label>
              <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange = {handleEmailChange}
                    required
                    placeholder="Enter email"
                  />
            </div>
            <div className="fields-container">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    placeholder="Enter password"
                  />
                </div>
                <div className="fields-container">
                  <label htmlFor="password">Name</label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                    placeholder="Enter Name"
                  />
                </div>
                 <br/>
                <button type="submit">Sign Up</button>
                
          </form>
        </div>
          );


}

export default CreateBroker;