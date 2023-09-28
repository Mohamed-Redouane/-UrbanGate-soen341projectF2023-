import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './assets/Components/App.tsx'
import Header from './assets/Components/Header.tsx'
import Footer from'./assets/Components/Footer.tsx'
import Houses from './assets/Components/Houses.tsx'

const router = createBrowserRouter([{path: "/", element: <App/>,},
{path: "/houses", element: <Houses/>}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Header/>
    <RouterProvider router = {router}/>
    <Footer/>

  </React.StrictMode>
)
