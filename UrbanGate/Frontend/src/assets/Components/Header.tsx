import "bootstrap/dist/css/bootstrap.min.css";

function Header() {

//a href works well with React Router, check React Router Documentation
    return (
        <div style={{position: "static"}}> 
            <div className="row"> <div className="card"> <div className="card-body" style={{backgroundColor: "#01AEB5", textAlign: "center"}}> <h5 className="card-header" style={{backgroundColor: "white"}}>  UrbanGate  </h5>   </div> </div> </div>
        <div className="row"> 
        <div className="col-3" style={{textAlign: "center", border: "solid", backgroundColor: "white"}}> <a href="/"> <h5 style={{color: "black"}}> About  </h5> </a> </div> <!-- Style attribute is weird for React, look at https://www.w3schools.com/react/react_css.asp-->
        <div className="col-3" style={{textAlign: "center", border: "solid", backgroundColor: "white"}}> <a href="/houses"> <h5 style={{color: "black"}}> Houses </h5> </a> </div>
        <div className="col-3" style={{textAlign: "center", border: "solid", backgroundColor: "white"}}> <a href="/broker">  <h5 style={{color: "black"}}>Broker </h5> </a> </div>
        <div className="col-3" style={{textAlign: "center", border: "solid", backgroundColor: "white"}}>  <a href="/account"> <h5 style={{color: "black"}}> Account </h5>  </a> </div>


        </div>
        </div>
    )
}


export default Header
