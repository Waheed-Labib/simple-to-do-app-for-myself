import React from 'react';

const SubmitTaskButton = ({ handleTaskSubmit }) => {
    return (
        <button onClick={handleTaskSubmit} className='text-green-100 bg-green-900 font-semibold rounded-sm h-8 w-11 hover:cursor-pointer hover:text-white'>
            Save
        </button>
    );
};

export default SubmitTaskButton;