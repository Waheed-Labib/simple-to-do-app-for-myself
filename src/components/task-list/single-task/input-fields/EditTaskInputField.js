import React from 'react';

const EditTaskInputField = ({ setEditedTaskName, handleTaskEdit, setIsTaskEditing, defaultValue }) => {

    const handleEditTaskInputChange = event => {
        if (event.key === 'Enter') {
            handleTaskEdit()
            return
        }
        if (event.key === 'Escape') {
            setIsTaskEditing(false)
            return
        }
        setEditedTaskName(event.target.value)
    }

    return (
        <input onKeyUp={handleEditTaskInputChange} className='w-[175px] h-9 px-2 border border-yellow-950 text-yellow-950 font-semibold' type='text' placeholder='type a task ..' defaultValue={defaultValue} />
    );
};

export default EditTaskInputField;