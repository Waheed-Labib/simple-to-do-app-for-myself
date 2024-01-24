import React from 'react';

const AddTaskButton = ({ setIsTaskAdding }) => {
    return (
        <button onClick={() => setIsTaskAdding(true)} className='bg-yellow-950 text-yellow-500 text-lg font-medium px-2 rounded-sm hover:cursor-pointer'>+</button>
    );
};

export default AddTaskButton;