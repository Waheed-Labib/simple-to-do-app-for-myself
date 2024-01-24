import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const TaskCancelButton = ({ setTaskStatus }) => {

    return (
        <button onClick={() => setTaskStatus('Canceled')} className='text-red-600 text-lg hover:cursor-pointer hover:text-xl'>
            <RxCross1></RxCross1>
        </button>
    );
};

export default TaskCancelButton;