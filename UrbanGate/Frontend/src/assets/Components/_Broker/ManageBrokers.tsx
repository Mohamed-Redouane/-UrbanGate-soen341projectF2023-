/*References:
Confirmation prompt for delete button: https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm
*/
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function ManageBrokers(){
 //[1], functional component
 const [brokers, setBrokers] = useState<any[]>([]);

 const getBrokers = () => {

   axios.post('http://localhost:3000/manageBrokers', {userID: window.localStorage.getItem("UserID")})
   .then((res) => {
     setBrokers(res.data.response);
   })
   .catch((err) => {
     console.log(err.response.data.popup);
   });
 }

 useEffect(() => {
   getBrokers();
 }, []);



 return (
   <div>
     {brokers.map((broker) =>
       <div className="card bg-dark text-white mx-2 mt-5" style={{ width: "310px", height: "460px", display: "inline-block" }}>
         <img src={"https://icon-library.com/images/person-icon-outline/person-icon-outline-2.jpg"} className="card-img-top" alt="..." style={{ height: "200px" }}></img>
         <div className="card-body">
           <ul className="list-group list-group-horizontal" style={{ fontSize: "11px", height: "30px", width: "270px" }}>
             <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "110px", padding: "none" }}> Name:  <br></br> <p style={{ textAlign: "center" }}> {broker.name}</p></li>
             <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "110px", padding: "none" }}>Email:<br></br> <p style={{ textAlign: "center" }}> {broker.email} </p> </li>
             <li className="list-group-item bg-dark text-white rounded-0 pt-0" style={{ borderTop: "none", borderBottom: "none", width: "110px", padding: "none" }}>Role:<br></br> <p style={{ textAlign: "center" }}> {broker.role} </p> </li>
           </ul><br></br>
           <h5 className="card-title mt-1"> {broker.price} </h5>
           <p className="card-text" style={{ fontSize: "15px" }}> {broker.description}</p>
           <div>
             <button className="btn btn-secondary text-white">
               <Link to={`/broker/BrokerDetail/${broker._id}`} style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>Edit</Link></button>              
               {/*https://stackoverflow.com/questions/70855260/how-to-pass-data-between-pages-in-react-with-react-router-dom-v6*/}
               <button className="deleteBroker" onClick = {async () => {
                 if(confirm("Are you sure?")){
                  axios.get(`http://localhost:3000/deleteBroker/${broker._id}`).then((response) => {
                    alert("BROKER SUCCESSFULLY DELETED");
                    window.location.reload();
                  }).catch((error) => {
                    console.log(error);
                  });
                 }
               }}>Delete</button>
           </div>
         </div>
       </div>
     )
     }
   </div>
 );
}

export default ManageBrokers;