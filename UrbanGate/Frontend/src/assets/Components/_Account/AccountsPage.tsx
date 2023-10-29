// REFERENCES
// [1] React Documentation: https://react.dev/learn
// [2] React Documentation: https://www.w3schools.com/REACT/DEFAULT.ASP
//     React Toastify: https://www.npmjs.com/package/react-toastify
import React from "react";
import { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AccountsPage() {
  return (
    <div className="accountsDiv">
      <SignIn />
      <SignUp />
    </div>
  );
}

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
 

  /*
  * Handles Sign-in request from user
  * Will locally store ID if it was successful
  * .then and .catch used here because there's nothing else to be executed after 
  * I followed this guide:
  * https://www.youtube.com/watch?v=enOsPhp2Z6Q at 28:12
  */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //Stop the page from reloading onSubmit
    const data = {
      email: email, 
      password: password,
    }
    axios.post("http://localhost:3000/signIn", data) //https://blog.logrocket.com/how-to-use-axios-post-requests/
      .then((res)=>{
        toast.success(res.data.popup); //
        window.localStorage.setItem("UserID", res.data.userID); //https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 1:15:57
        navigate("/"); //https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 1:16:51
        window.location.reload(); //Refresh and display the new header, I think this forces a rerender of the page
      })
      .catch((err)=>toast.error(err.response.data.popup)); //in case something goes wrong
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="fields-container">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRoleChange = (selectedRole: string) => {
    setRole((prevRole) => (prevRole === selectedRole ? "" : selectedRole));
  };

  /*
  * Handles request when user signs up 
  * I followed this guide: 
  * https://www.youtube.com/watch?v=enOsPhp2Z6Q at 28:12
  */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: email, 
      name: name, 
      password: password, 
      role: role
    };
    axios.post("http://localhost:3000/createUser", data)
      .then((res)=> toast.success(res.data.popup)) //
      .catch((err)=>  toast.error(err.response.data.popup)); //in case something goes wrong
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="fields-container">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
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
        <div className="fields-container">
          <div>
            <label htmlFor="homebuyer">Homebuyer</label>
            <input
              type="radio"
              id="homebuyer"
              name="role"
              value="homebuyer"
              checked={role === "homebuyer"}
              onChange={() => handleRoleChange("homebuyer")}
            />
            <label htmlFor="broker">Broker</label>
            <input
              type="radio"
              id="broker"
              name="role"
              value="broker"
              checked={role === "broker"}
              onChange={() => handleRoleChange("broker")}
            />
            <label htmlFor="broker">Renter</label>
            <input
              type="radio"
              id="renter"
              name="role"
              value="renter"
              checked={role === "renter"}
              onChange={() => handleRoleChange("renter")}
            />
          </div>
          <div>
            <button type="button" onClick={() => handleRoleChange("")}>
              Clear Selection
            </button>
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default AccountsPage;
