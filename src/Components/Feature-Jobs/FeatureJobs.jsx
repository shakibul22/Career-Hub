import React from 'react';
import "./FeatureJobs.css"
import { Link,  } from 'react-router-dom';

const FeatureJobs = ({ job }) => {
    console.log(job);
    const { company, title ,logoUrl,address,salary} = job;

    return (
        <div>
            <div className='shadow p-5 w-2/3'>
                <img src={logoUrl} className='w-1/5 h-30' alt="" />
                <div className=''>
                    <div className='font-bold text-xl mb-2'>
                        <h5 className=' font-light mb-3'>{title}</h5>
                        <div className='flex row-auto gap-2'>
                            <p className='remote font-bold  text-purple-900 text-center bg-white-300'>Remote</p >
                            <p className='remote font-bold  text-purple-900 text-center bg-white-300'>Full Time</p >
                        </div>
                        <div className='flex row-auto gap-3'>
                            <p className='text-current'>{address}</p>
                            <p className='text-current'>Salary: {salary}</p>
                        </div>
                        <Link to="/job-details"><button className='bg-purple-400 p-2  text-sm text-center rounded-lg'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FeatureJobs;