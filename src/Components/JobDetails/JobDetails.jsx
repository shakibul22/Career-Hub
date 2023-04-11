import React from 'react';
import './JobDetails.css'

const JobDetails = () => {
    return (
        <div className=' p-10'>
            <h1 className='job-details-title mb-20 text-center mt-5 font-bold text-3xl'>Job Details</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div>
                    <h6><span className='font-bold'>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</h6>
                    <h6 className='mb-3 mt-3'><span className='font-bold'>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</h6>
                    <h5 className='font-bold mb-2'>Educational Requirments:</h5>
                    <h6>Bachelor degree to complete any reputational university.</h6>
                    <h5 className='font-bold mb-2'>Experience:</h5>
                    <h6>2-3 Years in this field</h6>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;