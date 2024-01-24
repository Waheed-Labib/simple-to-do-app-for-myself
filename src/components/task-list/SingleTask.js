import React from 'react';

const SingleTask = ({ serialNo, taskName }) => {
    return (
        <div className='w-full my-2 h-8 py-1 border-b-2 border-yellow-950 flex items-center justify-between'>
            <div>
                <p className='bg-yellow-950 w-6 ps-1 text-white rounded-sm'>{serialNo}</p>
                <p>{taskName}</p>
            </div>

            <div>

            </div>
        </div>
    );
};

export default SingleTask;