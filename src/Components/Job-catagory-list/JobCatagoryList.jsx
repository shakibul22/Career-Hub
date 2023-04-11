import React from 'react';
import "./JobCatagoryList.css"

const JobCatagoryList = ({JobCatagory}) => {

  const {available_jobs,title,icon}=JobCatagory;
   
    return (
        <div>  
          <div className="jobcatagory-div p-8 shadow">
            <div className="jobcatagory-div-img">
              <img className='w-2/5'
                src={icon}
                alt=""
              />
            </div>
            <h3 className=" font-bold  pt-5">{title}</h3>
            <h4 className=" font-light pt-3">{available_jobs}</h4>
          </div>
        </div>
    );
};

export default JobCatagoryList;