import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const SingleTask = ({ serialNo }) => {

    const [isTaskAdding, setIsTaskAdding] = useState(false)

    return (
        <div className='w-full my-2 h-12 py-1 border-b-2 border-yellow-950 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <p className='bg-yellow-950 w-6 px-2 font-semibold text-yellow-500 rounded-sm'>{serialNo}</p>
                {
                    isTaskAdding ?
                        <div>
                            <input className='w-[175px] h-9 px-2 border border-yellow-950 text-yellow-950 font-semibold' type='text' placeholder='type a task ..'></input>
                        </div>
                        :
                        <p className='text-yellow-950'></p>
                }
            </div>

            <div>
                {
                    isTaskAdding ?
                        <>
                            <button onClick={() => { }} className='text-green-100 bg-green-900 rounded-sm h-8 w-7 me-1 ps-[6px] hover:cursor-pointer'>
                                <FaCheck></FaCheck>
                            </button>
                            <button onClick={() => { }} className='bg-red-600 text-red-100 text-lg font-thin rounded-sm h-8 w-7 ps-1 hover:cursor-pointer'>
                                <RxCross1></RxCross1>
                            </button>
                        </>

                        :
                        <button onClick={() => setIsTaskAdding(true)} className='bg-yellow-950 text-yellow-500 text-lg font-medium px-2 rounded-sm hover:cursor-pointer'>+</button>
                }

            </div>
        </div>
    );
};

export default SingleTask;