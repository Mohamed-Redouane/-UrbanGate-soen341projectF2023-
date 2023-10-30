// REFERENCES
// [2] React Documentation: https://react.dev/learn
// [3] React Router Documentation: https://reactrouter.com/en/main/start/tutorial

import "bootstrap/dist/css/bootstrap.min.css"; //[1] don't forget this
import { motion } from "framer-motion";
import "./Header.css";
import logo from "./logo.png" //font from https://www.fontget.com/font/lequire/
import {useState, useEffect} from 'react'; 
import axios from "axios";

function Header() { 
const[userRole, setUserRole] = useState("");
const[isSignedIn, setIsSignedIn] = useState(false);

const logout = () => {
    window.localStorage.removeItem("UserID"); //https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s  at 1:19:52
}

const f = () => {
    axios.post("http://localhost:3000/checkUser", {userID: window.localStorage.getItem("UserID")}) //https://www.youtube.com/watch?v=enOsPhp2Z6Q at 28:12
    .then((res)=>{
        setUserRole(res.data);
        setIsSignedIn(true);
        console.log("SIGNED IN")
    })
    .catch((err)=>{
        setUserRole("Not Signed In");
        setIsSignedIn(false);
        console.log(err.response.data.popup)
    });
};

useEffect(() => {f();}, []); // Will only be called once on reload https://stackoverflow.com/questions/72824151/react-useeffect-keeps-fetching + https://www.tutorialspoint.com/how-to-call-the-loading-function-with-react-useeffect
    return (
        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <div className="header-box">
                <h5 className="title"> <img src={logo} style={{height: "7vw", borderBottomLeftRadius: "10px",borderBottomRightRadius: "10px", filter: "drop-shadow(10px 10px 5px black)"}}/> </h5> {/*https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow*/}
                <div className="row"> {/* Bootstrap classes + svg icons https://getbootstrap.com/docs/5.3/getting-started/introduction/ */}
                    <div className="col-2"/>
                    <div className="col-2"> <a href="/" style={{textDecorationLine: "none" }}> <h5 className="nav-box1"> About<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg></h5> </a> </div> {/*[3], paths made with href*/}
                    <div className="col-2"> <a href="/houses" style={{ textDecorationLine: "none" }}> <h5 className="nav-box2"> Houses <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="dropd" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg> </h5> </a> </div> {/* [2], style attribute is weird https://www.w3schools.com/react/react_css.asp*/}
                    <div className="col-2"> <a href="/broker" style={{ textDecorationLine: "none" }}>  <h5 className="nav-box3"> Brokers<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg> </h5> </a> </div>
                    <div className="col-2">  <a href="/accounts" style={{ textDecorationLine: "none" }}> 
                    {/*https://www.youtube.com/watch?v=P43DW3HUUH8&t=5957s at 1:19:15*/}
                     {!window.localStorage.getItem("UserID") ?
                        (<h5 className="nav-box4"> Accounts<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg> </h5>): 
                        <button onClick={logout} className="nav-box4"> Logout </button> 
                     }
                     {isSignedIn && (<div className="user-type" style={{color: "black"}}>You are signed in as a {userRole}</div>)} {!isSignedIn && (<></>)}
                    </a> </div>
                    <div className="col-2"/>
                </div>
            </div>
        </motion.div>
    )
}
export default Header
