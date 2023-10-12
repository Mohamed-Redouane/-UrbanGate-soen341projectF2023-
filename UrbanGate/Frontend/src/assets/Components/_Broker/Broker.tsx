import {Link} from 'react-router-dom'

function Broker () {

    return (
        <div>
            <button> <Link to="/broker/CreateProperty"> Create Property </Link></button>
            <button> <Link to="/broker/ManageProperties"> Manage Properties </Link></button>
      
        </div>

    )

    



}




export default Broker;