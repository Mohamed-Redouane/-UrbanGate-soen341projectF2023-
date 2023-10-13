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
import PropertyPageDetail from './assets/Components/_Houses/PropertyPageDetail.tsx'
import AccountsPage from './assets/Components/_Account/AccountsPage.tsx';
import "bootstrap/dist/css/bootstrap.min.css"
import RequestVisitButton from './assets/Components/_Houses/RequestVisitButton.tsx';
import Broker from './assets/Components/_Broker/Broker.tsx'
import CreateProperty from './assets/Components/_Broker/CreateProperty.tsx'
import ManageProperties from './assets/Components/_Broker/ManageProperties.tsx'
import CreateBroker from './assets/Components/_Broker/CreateBroker.tsx'
import ManageBrokers from './assets/Components/_Broker/ManageBrokers.tsx'
import BrokerDetail from './assets/Components/_Broker/BrokerDetail.tsx'

const router = createBrowserRouter([
{path: "/", element: <AboutPage/>,}, //[2], it associates a URL path with a component

{path: "/houses", element: <Houses/>},
{path: "/houses/propertypagedetail", element: <PropertyPageDetail/>}, 
{path: "/accounts", element: <AccountsPage/>},
{path: "/house/propertydetail", element:<RequestVisitButton/>},
{path: "/broker", element:<Broker/>},
{path: "/broker/CreateProperty", element:<CreateProperty/>},
{path: "/broker/ManageProperties", element:<ManageProperties/>},
{path: "/broker/CreateBroker", element:<CreateBroker/>},
{path: "/broker/ManageBrokers", element:<ManageBrokers/>},
{path: "/broker/BrokerDetail/:_id", element:<BrokerDetail/>},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
 
  <React.StrictMode>

    <Header/>
   <RouterProvider router = {router}/>
    <Footer/>

  </React.StrictMode>
)
