// REFERENCES
// [1] Bootstrap Documentation: https://getbootstrap.com/docs/5.3/getting-started/introduction/
// [2] React Documentation: https://react.dev/learn
// [3] React Router Documentation: https://reactrouter.com/en/main/start/tutorial

import "bootstrap/dist/css/bootstrap.min.css"; //[1] don't forget this
import { motion } from "framer-motion";
import "./Header.css";
import logo from "./logo.png" //font from https://www.fontget.com/font/lequire/

function Header() { //[2]

    return (
        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <div style={{ background: "#2a0000" }} >
                <h5 className="title"> <img src={logo} style={{height: "7vw", borderBottomLeftRadius: "10px",borderBottomRightRadius: "10px", filter: "drop-shadow(10px 10px 5px black)"}}/> </h5> {/*https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow*/}
                <div className="row"> {/*[1], bootstrap rows and cols */}
                    <div className="col-2"/>
                    <div className="col-2" > <a href="/" style={{ textDecorationLine: "none" }}> <h5 className="nav1"> About<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg></h5> </a> </div> {/*[3], paths made with href*/}
                    <div className="col-2"> <a href="/houses" style={{ textDecorationLine: "none" }}> <h5 className="nav1"> Houses <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="dropd" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg> </h5> </a> </div> {/* [2], style attribute is weird https://www.w3schools.com/react/react_css.asp*/}
                    <div className="col-2"> <a href="/broker" style={{ textDecorationLine: "none" }}>  <h5 className="nav1"> Brokers<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg> </h5> </a> </div>
                    <div className="col-2">  <a href="/accounts" style={{ textDecorationLine: "none" }}> <h5 className="nav1"> Accounts<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg> </h5>  </a> </div>
                    <div className="col-2"/>

                </div>
            </div>
        </motion.div>
    )
}


export default Header
