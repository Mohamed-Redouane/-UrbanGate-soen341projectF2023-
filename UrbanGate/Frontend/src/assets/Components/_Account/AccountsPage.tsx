// REFERENCES
// [1] React Documentation: https://react.dev/learn
// [2] React Documentation: https://www.w3schools.com/REACT/DEFAULT.ASP
import React from "react";
import { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

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
  const [name, setName] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  //const [ ,setCookies]=useCookies(["tokenFromJwt"]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { email: email, password: password };
    const responseFromAPI = axios
      .post("http://localhost:3000/signIn", data)
      .then((res) => {
        alert("success");
        setCookies("access_token", res.data.token);
        window.localStorage.setItem("UserID", res.data.userID);
        navigate("/");
      })
      .catch((res) => alert("failure: " + res));

    //setCookies("tokenFromJwt", responseFromAPI); //going to store the user_id being sent back, this proves authentication and allows user to be verifed
    //Note going to use cookie to validate whether to re-route sign in page to managing accounts page once authentication token exists
    //navigate("/"); //sends user to home page and the accounts page will not route to account management
  };

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

  const success = () => {
    alert("SUCCESS");
  };
  const navigate = useNavigate();
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { email: email, name: name, password: password, role: role };
    axios
      .post("http://localhost:3000/createUser", data)
      .then(() => alert("SUCCESS"))
      .catch((res) => alert("Error code: " + res));
    //console.log(email +  "" + password +"" + name+""   + role);
  };

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
