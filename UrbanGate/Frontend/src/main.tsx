// REFERENCES
// [1] React Documentation: https://react.dev/learn
// [2] React Router Documentation: https://reactrouter.com/en/main/start/tutorial

import React from 'react' // [1]
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom"; // [2]
import App from './assets/Components/App.tsx'
import Header from './assets/Components/Header.tsx' 
import Footer from'./assets/Components/Footer.tsx'
import Houses from './assets/Components/Houses.tsx'

const router = createBrowserRouter([{path: "/", element: <App/>,}, //[2], it associates a URL path with a component
{path: "/houses", element: <Houses/>}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Header/>
    <RouterProvider router = {router}/> {/* [2], replaces the component in accordance to the path*/}
    <Footer/>

  </React.StrictMode>
)
