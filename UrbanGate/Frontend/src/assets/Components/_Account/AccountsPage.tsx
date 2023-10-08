import React from 'react'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./SignIn.css"

function AccountsPage(){
    return(
      <div className="accountsDiv">
        <SignIn/>
        <SignUp/>
      </div>
);
}

function SignIn(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return(
<div className="container">
  <form>
    <h2>Sign In</h2>
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
        <button type="submit">Sign In</button>
  </form>
</div>
  );
}

function SignUp(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return(
<div className="container">
  <form>
    <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
  </form>
</div>
  );
}



export default AccountsPage;