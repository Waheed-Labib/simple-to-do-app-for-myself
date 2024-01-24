import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const CancelEditButton = ({ setIsTaskEditing }) => {
    return (
        <button onClick={() => { setIsTaskEditing(false) }} className='bg-red-600 text-red-100 text-lg font-thin rounded-sm h-8 w-7 ps-1 hover:cursor-pointer'>
            <RxCross1></RxCross1>
        </button>
    );
};

export default CancelEditButton;