import React, { useState } from 'react';
import { IoCheckmarkDone } from "react-icons/io5";

const SingleTask = ({ serialNo }) => {

    const [isTaskAdding, setIsTaskAdding] = useState(false)

    return (
        <div className='w-full my-2 h-8 py-1 border-b-2 border-yellow-950 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <p className='bg-yellow-950 w-6 px-2 font-semibold text-yellow-500 rounded-sm'>{serialNo}</p>
                {
                    isTaskAdding ?
                        <div>
                            <input className='w-40' type='text'></input>
                        </div>
                        :
                        <p className='text-yellow-950'></p>
                }

            </div>

            <div>
                {
                    isTaskAdding ?
                        <p onClick={() => setIsTaskAdding(true)} className='bg-yellow-950 text-yellow-500 text-lg font-medium px-2 rounded-sm hover:cursor-pointer'>+</p>
                        :
                        <p onClick={() => setIsTaskAdding(true)} className='bg-yellow-950 text-yellow-500 text-lg font-medium px-2 rounded-sm hover:cursor-pointer'>+</p>
                }

            </div>
        </div>
    );
};

export default SingleTask;