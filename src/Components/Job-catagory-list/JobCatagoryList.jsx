import React from 'react';
import "./JobCatagoryList.css"

const JobCatagoryList = () => {

   
    return (
        <div>
            <div className='text-center p-4 mb-4'>
                <h2 className='catagory-title'> Job Catagory List</h2>
                <h6>Explore thousands of job opportunities with all the information you need. Its your future</h6>
            </div>
            <div className="grid grid-cols-2 p-5 md:grid-cols-4 col-1 sm:grid-cols-2 justify-evenly gap-5 mb-4">
          <div className="jobcatagory-div p-6 shadow">
            <div className="jobcatagory-div-img">
              <img className='w-2/5'
                src="https://icones.pro/wp-content/uploads/2021/06/icone-de-la-calculatrice-noir.png"
                alt=""
              />
            </div>
            <h3 className=" font-bold text-xl  pt-5">Account & Finance</h3>
            <h4 className=" font-light pt-3">300 Jobs Available</h4>
          </div>
          <div className="jobcatagory-div p-6 shadow">
            <div className="jobcatagory-div-img">
              <img className='w-2/5'
                src="https://cdn-icons-png.flaticon.com/512/702/702814.png"
                alt=""
              />
            </div>
            <h3 className=" font-bold text-xl  pt-5">Creative Design</h3>
            <h4 className=" font-light pt-3 ">200 Jobs Available</h4>
          </div>
          <div className="jobcatagory-div p-6 shadow">
            <div className="jobcatagory-div-img">
              <img className='w-2/5 '
                src="https://cdn-icons-png.flaticon.com/512/2949/2949101.png"
                alt=""
              />
            </div>
            <h3 className=" font-bold text-xl pt-5">Marketing</h3>
            <h4 className=" font-light pt-3">144 Jobs Available</h4>
          </div>
          <div className="jobcatagory-div p-6 shadow">
            <div className="jobcatagory-div-img">
              <img className='w-2/5'
                src="https://cdn-icons-png.flaticon.com/512/1693/1693746.png"
                alt=""
              />
            </div>
            <h3 className=" font-bold text-xl  pt-5">Engineering Job</h3>
            <h4 className=" font-light pt-3 ">300 Jobs Available</h4>
          </div>
        </div>
        </div>
    );
};

export default JobCatagoryList;