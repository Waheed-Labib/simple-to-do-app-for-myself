import React from 'react';

const AddTaskButton = () => {
    return (
        <button className='w-full h-12 bg-yellow-800 text-white rounded-b-lg flex items-center justify-start'>
            <p className='w-16 bg-yellow-950 h-12 pt-2 text-xl font-semibold'>+</p>
            <p className='ms-12 font-semibold'>Add A Task</p>
        </button>

    );
};

export default AddTaskButton;