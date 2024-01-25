import React from 'react';

const AppointedTime = ({ schedule }) => {

    if (schedule) return (
        <div className='text-yellow-950 my-5 font-semibold'>
            <p className='mb-2'>Starts :<span className='ms-[26px] py-[2px] bg-yellow-500 px-4 rounded-sm'>{schedule.startDay}</span> <span className='bg-yellow-600 py-[2px] px-4 rounded-sm'>{schedule.startTime}</span></p>
            <p>Ends :<span className='ms-8 bg-yellow-600 py-[2px] px-4 rounded-sm'>{schedule.endDay}</span> <span className='bg-yellow-500 px-4 py-[2px] rounded-sm'>{schedule.endTime}</span></p>
        </div>
    );
};

export default AppointedTime;