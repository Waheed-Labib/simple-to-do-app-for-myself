import React from 'react';
import { FaCheck } from 'react-icons/fa';

const SubmitEditButton = ({ handleTaskEdit }) => {
    return (
        <button onClick={handleTaskEdit} className='text-green-100 bg-green-900 rounded-sm h-8 w-7 me-1 ps-[6px] hover:cursor-pointer'>
            <FaCheck></FaCheck>
        </button>
    );
};

export default SubmitEditButton;