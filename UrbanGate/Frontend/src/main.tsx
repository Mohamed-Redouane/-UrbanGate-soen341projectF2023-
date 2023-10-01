// REFERENCES
// [1] React Documentation: https://react.dev/learn
// [2] React Router Documentation: https://reactrouter.com/en/main/start/tutorial

import React from 'react' // [1]
import ReactDOM from 'react-dom/client'
/*import {BrowserRouter, createBrowserRouter,RouterProvider,} from "react-router-dom"; // [2]*/
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './assets/Components/App.tsx'
import Header from './assets/Components/Header.tsx' 
import Footer from'./assets/Components/Footer.tsx'
import Houses from './assets/Components/Houses.tsx'
import SignUp from './assets/Components/SignUp.tsx'
import SignIn from './assets/Components/SignIn.tsx'
import AccountsPage from './assets/Components/AccountsPage.tsx';
import "bootstrap/dist/css/bootstrap.min.css"

/*const router = createBrowserRouter([{path: "/", element: <App/>,}, //[2], it associates a URL path with a component
{path: "/houses", element: <Houses/>}])*/

ReactDOM.createRoot(document.getElementById('root')!).render(
 
  <React.StrictMode>
  <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/houses" element={<Houses />} />
    <Route path="/accounts" element={<AccountsPage />} />
    <Route path="/accounts/signup" element={<SignUp />} />
    <Route path="/accounts/signin" element={<SignIn />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
)
