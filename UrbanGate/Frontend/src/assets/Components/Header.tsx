// REFERENCES
// [1] Bootstrap Documentation: https://getbootstrap.com/docs/5.3/getting-started/introduction/
// [2] React Documentation: https://react.dev/learn
// [3] React Router Documentation: https://reactrouter.com/en/main/start/tutorial
import Accounts from "./AccountsPage";
import "bootstrap/dist/css/bootstrap.min.css"; //[1] don't forget thison Header() { //[2]
function Header(){
    return (
        <div style={{position: "static"}}> 
          
        <div className="row"> {/*[1], bootstrap rows and cols */}
        <div className="col-3" style={{textAlign: "center", border: "solid", backgroundColor: "white"}}> <a href="/"> <h5 style={{color: "black"}}> About  </h5> </a> </div> {/*[3], paths made with href*/}
        <div className="col-3" style={{textAlign: "center", border: "solid", backgroundColor: "white"}}> <a href="/houses"> <h5 style={{color: "black"}}> Houses </h5> </a> </div> {/* [2], style attribute is weird https://www.w3schools.com/react/react_css.asp*/}
        <div className="col-3" style={{textAlign: "center", border: "solid", backgroundColor: "white"}}> <a href="/broker">  <h5 style={{color: "black"}}>Broker </h5> </a> </div>
        <div className="col-3" style={{textAlign: "center", border: "solid", backgroundColor: "white"}}>  <a href="/accounts"> <h5 style={{color: "black"}}> Accounts </h5>  </a> </div>


        </div>
        </div>
    )
}


export default Header
