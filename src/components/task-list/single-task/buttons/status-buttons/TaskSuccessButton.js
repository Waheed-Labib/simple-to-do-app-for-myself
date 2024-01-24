import React from 'react';
import { FaCheck } from 'react-icons/fa';

const TaskSuccessButton = ({ setTaskStatus, handleTaskEdit }) => {

    return (
        <button onClick={() => setTaskStatus('Completed')} className='text-green-600 text-lg font-semibold hover:cursor-pointer hover:text-xl'>
            <FaCheck></FaCheck>
        </button>
    );
};

export default TaskSuccessButton;