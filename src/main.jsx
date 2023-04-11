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
import JobCatagoryList from './Components/Job-catagory-list/JobCatagoryList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children :[
      {
        path:'/',
        element: <Home />
      },
      {
        path:"jobcatagorylist",
        element:<JobCatagoryList/>,
        loader:()=>fetch(`catagory-list.json`)
      },
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
