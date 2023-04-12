import React from 'react';


const AppliedJob = ({jobData}) => {
    const { title ,logoUrl,address,salary}=jobData;
    return (
       
            <div className="card card-side flex flex-row gap-40 justify-center align-middle items-center shadow-lg p-3 mb-10 bg-white-200 ">
                   
                   <div className='flex flex-row gap-10 '>
                       <img src={logoUrl} className='w-1/5 h-30' alt="" />
                       <div >
                           <h5 className=' font-light mb-3'>{title}</h5>
                           <p className='remote font-bold  mb-1 text-purple-900 text-center bg-white-300'>Remote</p >
                           <p className='remote font-bold  text-purple-900 text-center bg-white-300'>Full Time</p >
                           <p className='text-current'>Address:{address} </p>
                           <p className='text-current'>Salary: {salary}</p>
                       </div>

                   <button className='bg-purple-100 p-2 w-1/5 h-1/2 rounded-lg text-sm text-center '>View Details</button>
                   </div>

               </div>
     
    );
};

export default AppliedJob;