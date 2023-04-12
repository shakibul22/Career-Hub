import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,

    children :[
      {
        path:'/',
        element: <Home />,
        loader:()=>fetch('/catagorylist.json'),
      },
    
      { path: '/job-details/:id', element: <JobDetails/>, loader:({params})=>fetch('/job.json')},
      { path: '/statistics', element: <Statistics/> },
      { path: '/applied-jobs', element: <AppliedJobs/> },
      { path: '/blog', element: <Blog/> },
   
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
