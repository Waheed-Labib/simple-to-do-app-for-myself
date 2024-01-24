import React from 'react';

const TaskInputField = ({ setNewTaskName, handleTaskNameSubmit }) => {

    const handleTaskInputChange = event => {
        if (event.key === 'Enter') {
            handleTaskNameSubmit()
            return
        }
        console.log(event.target.value)
        setNewTaskName(event.target.value)
    }

    return (
        <input onKeyUp={handleTaskInputChange} className='w-[175px] h-9 px-2 border border-yellow-950 text-yellow-950 font-semibold' type='text' placeholder='type a task ..' />
    );
};

export default TaskInputField;