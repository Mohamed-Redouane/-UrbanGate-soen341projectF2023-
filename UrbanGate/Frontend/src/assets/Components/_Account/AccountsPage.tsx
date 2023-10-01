import React from 'react'; 
import { Link } from 'react-router-dom';

function AccountsPage(){
    return(
<div>
      <p>Welcome to our App</p>
      <button>
        <Link to="/accounts/signin">Sign In</Link>
      </button>
      <button>
        <Link to="/accounts/signup">Sign Up</Link>
      </button>
  </div>
    );
}
export default AccountsPage;