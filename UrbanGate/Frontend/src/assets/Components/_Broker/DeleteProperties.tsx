import { useParams, useNavigate} from "react-router-dom";
import axios from 'axios';


function DeleteProperties() {
    const navigate = useNavigate();
    //const [property, setProperty] = useState({title: "string", description: "string", type: "string", price: "string", location: "string", area: "string", bedroom: "string", bathroom: "string", status:"string", imageUrl: "string"});

    const {_id} = useParams(); //
    console.log(_id);

    const handleDeleteProperty = () => {
        
        axios.delete(`http://localhost:3000/deletePropertyID/${_id}`).then(() => { 
          //https://www.freecodecamp.org/news/how-to-use-axios-with-react/#how-to-make-a-delete-request
          //https://www.youtube.com/watch?v=-42K44A1oMA 45:15
        console.log("Property deleted");
       }).catch((error) => {
        
        alert("Error deleting property");
         console.log(error);
       });
       navigate("/broker/ManageProperties");
      }
      const handleCancel = () => {
        navigate("/broker/ManageProperties");
      }

    return(
        <>
        <div>
            Are you sure you want to delete this property? This action is irreversible.
        </div>
        <button onClick={handleDeleteProperty}>Yes</button>
        <button onClick={handleCancel}>Cancel</button>
        </>
    )
}

export default DeleteProperties