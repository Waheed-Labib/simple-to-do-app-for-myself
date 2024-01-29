import React from 'react';

const AppointedTime = ({ schedule }) => {

    const startDay = schedule?.startDay;
    const startTime = schedule?.startTime;
    const endDay = schedule?.endDay;
    const endTime = schedule?.endTime;

    // atleast one of the four values have to exist,
    // otherwise this component will not render
    if (startDay || startTime || endDay || endTime)
        return (
            <div className='text-yellow-950 my-5 font-semibold w-full'>

                <div className='flex items-center justify-between mb-2'>
                    <p className='font-bold'>Starts :</p>
                    <div className='flex'>
                        <p className='w-14 bg-yellow-500 text-center py-1'>{startDay}</p>
                        <p className='w-16 bg-yellow-600 text-center py-1'>{startTime}</p>
                    </div>

                </div>

                <div className='flex items-center justify-between'>
                    <p className='font-bold'>Ends :</p>
                    <div className='flex'>
                        <p className='w-14 bg-yellow-600 text-center py-1'>{endDay}</p>
                        <p className='w-16 bg-yellow-500 text-center py-1'>{endTime}</p>
                    </div>
                </div>
            </div>
        );
};

export default AppointedTime;