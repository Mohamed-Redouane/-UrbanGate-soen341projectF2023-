import { useParams, useNavigate} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect, } from "react";


function DeleteProperties() {
    const navigate = useNavigate();
    //const [property, setProperty] = useState({title: "string", description: "string", type: "string", price: "string", location: "string", area: "string", bedroom: "string", bathroom: "string", status:"string", imageUrl: "string"});

    const {_id} = useParams();
    console.log(_id);

    const handleDeleteProperty = () => {
        
        axios.delete(`http://localhost:3000/deletePropertyID/${_id}`).then(() => {
        console.log("Property deleted");
       }).catch((error) => {
       
        alert("Error deleting property");
         console.log(error);
       });
      }
      /*
      useEffect(() => {
      
        handleDeleteProperty();
      
      }, []);
*/
      const handleNo = () => {
        navigate("/broker/ManageProperties");
      }

    return(
        <>
        <div>
            Are you sure you want to delete this property?
        </div>
        <button onClick={handleDeleteProperty}>Yes</button>
        <button onClick={handleNo}>No</button>
        </>
    )
}

export default DeleteProperties