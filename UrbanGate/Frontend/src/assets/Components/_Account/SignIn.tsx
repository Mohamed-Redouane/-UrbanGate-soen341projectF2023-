import React, { useState } from 'react';
const server = 'http://localhost:3000';
import "./SignIn.css"

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    const response = await fetch(server);
    console.log(response);
  };

  return (
    <div className="sign">
      <h2 style={{textAlign: "center"}}>Enter your information</h2> <br/>
      <form onSubmit={handleSubmit}>
        <div style={{textAlign: "center"}}>
          <label>__Email__</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div> <br/>
        <div style={{textAlign: "center"}}>
          <label >__Password__</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button style={{textAlign: "center",}} onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  );
}

