import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";




function BrokerDetail() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [broker, setBroker] = useState({ name: "", email: "", password: "", role: "" });
  const { _id } = useParams();
  const navigate = useNavigate();

  const success = () => {
    alert("SUCCESS");
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { userID: _id, email: email, name: name, password: password };
    console.log(data.userID);
    axios.post("http://localhost:3000/updateBroker", data)
      .then((res) => {
        if (res.data.popup!=='Update Success') {
          alert (res.data.popup);
        }
        else {
        alert(res.data.popup);
        window.location.reload();
        }
      })
      .catch((res) => alert("failure" + res));
  }

  const getBroker = () => {
    axios.get(`http://localhost:3000/readBrokerID/${_id}`).then((response) => {
      setBroker(response.data);
      console.log(response.data);

    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getBroker();
    console.log(broker);
  }, []);


  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="card bg-dark text-white mx-4 mt-5" style={{ width: "310px", height: "460px", display: "inline-block" }}>
        <img src={"https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_.jpg"} className="card-img-top" alt="..." style={{ height: "200px" }}></img>
        <div className="card-body">
          <ul className="list-group list-group-horizontal" style={{ fontSize: "11px", height: "30px", width: "270px" }}>
            <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "110px", padding: "none" }}> Name:  <br></br> <p style={{ textAlign: "center" }}> {broker.name}</p></li>
            <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "110px", padding: "none" }}>Email:<br></br> <p style={{ textAlign: "center" }}> {broker.email} </p> </li>
            <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "110px", padding: "none" }}>Password:<br></br> <p style={{ textAlign: "center" }}> {broker.password} </p> </li>
            <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "110px", padding: "none" }}>Role:<br></br> <p style={{ textAlign: "center" }}> {broker.role} </p> </li>
          </ul><br>
          </br>
          <div>
          </div>
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Edit Broker</h2>
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
          <br />
          <button type="submit">Update</button>

        </form>
      </div>
    </div>
  )

}

export default BrokerDetail;