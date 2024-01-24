import React, { useState } from 'react';
import { IoCheckmarkDone } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const SingleTask = ({ serialNo }) => {

    const [isTaskAdding, setIsTaskAdding] = useState(false)

    return (
        <div className='w-full my-2 h-12 py-1 border-b-2 border-yellow-950 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <p className='bg-yellow-950 w-6 px-2 font-semibold text-yellow-500 rounded-sm'>{serialNo}</p>
                {
                    isTaskAdding ?
                        <div>
                            <input className='w-40 h-9 px-2 border border-yellow-950 text-yellow-950 font-semibold' type='text' placeholder='type a task ..'></input>
                        </div>
                        :
                        <p className='text-yellow-950'></p>
                }
            </div>

            <div>
                {
                    isTaskAdding ?
                        <>
                            <button onClick={() => { }} className='bg-green-900 text-white text-lg font-medium rounded-sm h-8 w-8 me-2 ps-2 hover:cursor-pointer'>
                                <IoCheckmarkDone></IoCheckmarkDone>
                            </button>
                            <button onClick={() => { }} className='bg-red-600 text-red-100 text-lg font-thin rounded-sm h-8 w-8 ps-[6px] hover:cursor-pointer'>
                                <MdOutlineCancel></MdOutlineCancel>
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