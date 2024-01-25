import React from 'react';
import { FaEdit } from "react-icons/fa";

const TaskEditButton = ({ setIsTaskEditing }) => {
    return (
        <button onClick={() => setIsTaskEditing(true)} className='text-yellow-800 text-lg font-semibold hover:cursor-pointer hover:text-xl'>
            <FaEdit></FaEdit>
        </button>
    );
};

export default TaskEditButton;