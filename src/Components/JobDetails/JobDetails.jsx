import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utilities/fakeDB';
import Detail from '../Detail/Detail';

const JobDetails = () => {
    const jobDetails=useLoaderData();
    const detailsId=useParams();
    const dynamicId=detailsId.id;
    const [details,setDetails]=useState({});
    useEffect(()=>{
        if(jobDetails){
            const findData=jobDetails.find((data)=>data.id===dynamicId);
            setDetails(findData);
        }

    })

    // const handleAddToAppliedJobs=(id)=>{
    //     console.log(id);
    //     addToDb(id)
    //  }
    return (
        <div className=' p-10'>
            <h1 className='job-details-title mb-20 text-center mt-5 font-bold text-3xl'>Job Details</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <h6><span className='font-bold'>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</h6>
                    <h6 className='mb-3 mt-3'><span className='font-bold'>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</h6>
                    <h5 className='font-bold mb-2'>Educational Requirments:</h5>
                    <h6>Bachelor degree to complete any reputational university.</h6>
                    <h5 className='font-bold mb-2'>Experience:</h5>
                    <h6>2-3 Years in this field</h6>
                </div>
                <div>
                <div className='p-8 shadow w-2/3 '>
                    <h4 className='font-bold mb-3'>Job Details:</h4>
                    <hr/>
                    <h6 className='font-sm p-2'><span className='font-semibold'>Salary:</span> {details.salary}</h6>
                    <h6 className='font-sm p-2 mb-11'><span className='font-semibold'>Job Title:</span> {details.title}</h6>
                    <button className='bg-purple-300 rounded-lg p-2 font-bold'>Apply Now</button>
                </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;