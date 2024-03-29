import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Roots from './components/Roots';
import AuthProvider from './provider/AuthProvider';
import Orders from './components/Orders';
import PrivetRouts from './routs/PrivetRouts';
import Profile from './components/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      { 
        path:'/orders',
        element:<PrivetRouts> <Orders></Orders> </PrivetRouts> 
      },
      {
        path:'/profile',
        element:<PrivetRouts><Profile></Profile></PrivetRouts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
