import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayour from './MainLayout/MainLayour';
import Home from './Compontnts/Home/Home';
import About from './Compontnts/About/About';
import Login from './Compontnts/Login/Login';
import Register from './Compontnts/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayour></MainLayour>,
    errorElement:<p>Eoor</p>, 
    children : [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/reg',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
