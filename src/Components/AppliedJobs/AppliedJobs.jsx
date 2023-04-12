import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobsData } from '../../Utilities/fakeDB';
import AppliedJob from '../AppliedJob/AppliedJob';


const AppliedJobs = () => {
    const applyData = useLoaderData();
    let storedData = [];
    const saveStoredData = getStoredJobsData()
    for (const id in saveStoredData) {
        const foundJob = applyData.find(applyItem => applyItem.id === id)
        if (foundJob) {
            storedData.push(foundJob)
        }
    }


    return (
        <div>
            <h1 className='text-center font-extrabold m-20 text-3xl'>Applied Jobs</h1>
            <div className='appliedJob'>
                {
                    storedData.map(jobData => <AppliedJob key={jobData.id} jobData={jobData}></AppliedJob>)
                }
            </div>
        </div>



    );
};

export default AppliedJobs;