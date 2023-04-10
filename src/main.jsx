import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children :[
      {
        path:'/',
        element: <Home />
      }
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
