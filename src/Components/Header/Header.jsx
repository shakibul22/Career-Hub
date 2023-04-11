import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar  shadow-xl bg-base-100 p-4">
            <div className="navbar-start">
                <h1 className="header-title">Job Hunter</h1>
            </div>
         
               <div className="navbar-center  text-black md:flex gap-3  fs-4">
               <Link to="/">Home</Link>
               <Link to="/statistics">Staistics</Link>
               <Link to="/appliedJobs">Applied-jobs</Link>
               <Link to="/blog">Blog</Link>
                
            </div>
            <div className="navbar-end">
                <Link className="appling-btn px-4 ml-2">Apply</Link>
            </div>
       
        </nav>
    );
};

export default Header;