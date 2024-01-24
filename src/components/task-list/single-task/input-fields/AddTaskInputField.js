import React from 'react';

const AddTaskInputField = ({ setNewTaskName, handleTaskSubmit, setIsTaskAdding, defaultValue }) => {

    const handleAddTaskInputChange = event => {
        if (event.key === 'Enter') {
            handleTaskSubmit()
            return
        }
        if (event.key === 'Escape') {
            setIsTaskAdding(false)
        }
        setNewTaskName(event.target.value)
    }

    return (
        <input onKeyUp={handleAddTaskInputChange} className='w-[175px] h-9 px-2 border border-yellow-950 text-yellow-950 font-semibold' type='text' placeholder='type a task ..' />
    );
};

export default AddTaskInputField;