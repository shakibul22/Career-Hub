import React from 'react';
import './Home.css'
import JobCatagoryList from '../Job-catagory-list/JobCatagoryList';

const Home = () => {
    return (
       <div>
         <section className='banner flex mt-8 '>
        <div className='bg-white-200 relative  text-start p-4'>
          <div className='my-container text-start flex flex-col  pb-24  lg:pb-56 text-gray-900'>
            <h1 className='text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text'>
              One Step <br /> Closer To Your <br /><span>Dream Job</span>
            </h1>
            <p className='my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900'>
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish
            </p>
            <button type='button' className='btn mb-0'>
                Get Started
              </button>
       
           
          </div>
        </div>
        <div className='banner-img w-1/2 '>
        <img
          src='https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1681140757~exp=1681141357~hmac=c359a4e9765d7a6d9666d923229c484f5ffe12dd908ccf693c2eed8a2bec6316'
          alt=''
         
        />
        </div>
      </section>
      <JobCatagoryList/>
       </div>
    );
};

export default Home;