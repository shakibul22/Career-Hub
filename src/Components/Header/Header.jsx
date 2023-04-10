import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                <Link
                    to='/'
                    aria-label='HeroGadget'
                    title='HeroGadget'
                    className='inline-flex items-center'
                >
                    <img src="/public/All Images/CareerHub.png" alt="" />

                </Link>
               
                <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              aria-label='Home'
              title='Home'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/shop'
              aria-label='Shop'
              title='Shop'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              aria-label='About Us'
              title='About Us'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              About Us
            </NavLink>
          </li>
        </ul>
                <div className="navbar-end">
                    <a className="btn bg-purple-300">Start Applying</a>
                </div>
            </div>

        </div>
    );
};

export default Header;