import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <section className=' flex mt-8 '>
        <div className='bg-white-200 text-start'>
          <div className='my-container text-start flex flex-col items-center pb-24  lg:pb-56 text-gray-900'>
            <h1 className='text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text'>
              One Step <br /> Closer To Your <br /><span>Dream Job</span>
            </h1>
            <p className='my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900'>
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish
            </p>
            <button type='button' className='btn '>
                Get Started
              </button>
       
           
          </div>
        </div>
        <div className=' w-5/6'>
        <img
          src='/public/All Images/P3OLGJ1 copy 1.png'
          alt=''
         
        />
        </div>
      </section>
    );
};

export default Home;