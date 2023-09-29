import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom"; // from React Router's documentation
import App from './assets/Components/App.tsx'
import Header from './assets/Components/Header.tsx' // from React's documentation
import Footer from'./assets/Components/Footer.tsx'
import Houses from './assets/Components/Houses.tsx'

const router = createBrowserRouter([{path: "/", element: <App/>,}, // from React Router's documentation
{path: "/houses", element: <Houses/>}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Header/>
    <RouterProvider router = {router}/> <!--from React Router's documentation -->
    <Footer/>

  </React.StrictMode>
)
