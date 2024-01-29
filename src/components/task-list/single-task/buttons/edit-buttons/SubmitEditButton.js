import React from 'react';
import { FaCheck } from 'react-icons/fa';

const SubmitEditButton = ({ handleTaskEdit }) => {
    return (
        <button onClick={handleTaskEdit} className='text-green-100 bg-green-900 font-semibold rounded-sm h-8 w-11 hover:cursor-pointer hover:text-white'>
            Save
        </button>
    );
};

export default SubmitEditButton;