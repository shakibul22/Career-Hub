import React from 'react';

const AppliedJobs = () => {
    return (
        <div>
            <h1 className='text-center font-extrabold m-20 text-3xl'>Applied Jobs</h1>
            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-1/2 h-1/2 ' src="https://images.pexels.com/photos/3942124/pexels-photo-3942124.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <h4>Click the button to watch on Jetflix app.</h4>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;