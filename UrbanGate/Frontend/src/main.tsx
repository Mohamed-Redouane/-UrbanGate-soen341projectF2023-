// REFERENCES
// [1] React Documentation: https://react.dev/learn
// [2] React Router Documentation: https://reactrouter.com/en/main/start/tutorial

import React from 'react' // [1]
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom"; // [2]*/
import AboutPage from './assets/Components/_About/AboutPage.tsx';
import Header from './assets/Components/Header.tsx' 
import Footer from'./assets/Components/Footer.tsx'
import Houses from './assets/Components/_Houses/Houses.tsx'
import SignUp from './assets/Components/_Account/SignUp.tsx'
import SignIn from './assets/Components/_Account/SignIn.tsx'
import AccountsPage from './assets/Components/_Account/AccountsPage.tsx';
import "bootstrap/dist/css/bootstrap.min.css"
import RequestVisitButton from './assets/Components/_Houses/RequestVisitButton.tsx';

const router = createBrowserRouter([
{path: "/", element: <AboutPage/>,}, //[2], it associates a URL path with a component

{path: "/houses", element: <Houses/>},

{path: "/accounts", element: <AccountsPage/>},
{path: "/accounts/signup", element: <SignUp/>},
{path: "/accounts/signin", element:<SignIn/>},
{path: "/house/propertydetail", element:<RequestVisitButton/>}



])

ReactDOM.createRoot(document.getElementById('root')!).render(
 
  <React.StrictMode>

    <Header/>
   <RouterProvider router = {router}/>
    <Footer/>

  </React.StrictMode>
)
