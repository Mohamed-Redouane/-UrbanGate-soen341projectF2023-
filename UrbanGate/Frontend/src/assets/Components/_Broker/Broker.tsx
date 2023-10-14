import {Link} from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from "react";



function Broker () {
    const [user, checkUser] = useState("");
    const [isLoading, setLoading] = useState(true);   


    const f = async () => {
         await setLoading(true);
         await axios.post("http://localhost:3000/checkUser", {userID: window.localStorage.getItem("UserID")}).then((res)=>{
            console.log("valid");
            checkUser(res.data);
            
        }).catch((res)=>{
            console.log("not valid")
            checkUser(res.data);
            
        });
         await setLoading(false);
    };

    
    useEffect(() => {
        f();
    }, []);





    

    return (
  <>
  {isLoading && <h1>Loading!</h1>}
  {(!isLoading && (user == "broker")) && <div>
         <button><Link to="/broker/CreateProperty">Create Property</Link></button>
         <button><Link to="/broker/ManageProperties">Manage Properties</Link></button>
     </div>}
     {(!isLoading && (user == "admin")) && <div>
         <button><Link to="/broker/CreateBroker">Create Broker</Link></button>
         <button><Link to="/broker/ManageBrokers">Manage Brokers</Link></button>
     </div>}
 {(!isLoading && (user != "broker") && (user != "admin")) && <div>
            <h1>You are not a broker</h1>
            <img src="https://media.tenor.com/9XrarieeeaAAAAAd/rain-chair.gif" alt="not a broker"></img>
        </div>}
  </>
    )
}




export default Broker;