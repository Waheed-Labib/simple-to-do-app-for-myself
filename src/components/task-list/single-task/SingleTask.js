import React, { useEffect, useState } from 'react';
import TaskInputField from './TaskInputField';
import AddTaskButton from './AddTaskButton';
import CancelAddingTaskButton from './CancelAddingTaskButton';
import SubmitTaskButton from './SubmitTaskButton';


const SingleTask = ({ serialNo }) => {
    const [taskName, setTaskName] = useState(localStorage.getItem(`task-${serialNo}`))

    const [isTaskAdding, setIsTaskAdding] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');

    const handleTaskNameSubmit = () => {
        localStorage.setItem(`task-${serialNo}`, newTaskName)
        setTaskName(newTaskName);
        setIsTaskAdding(false)
    }

    return (
        <div className='w-full my-2 min-h-12 py-1 border-b-2 border-yellow-950 flex items-center justify-between'>
            {/* this div holds serialNo and Task Name / Input Field */}
            <div className='flex items-center gap-4'>

                <p className='bg-yellow-950 w-7 px-2 font-semibold text-yellow-500 rounded-sm'>{serialNo}</p>
                {
                    taskName &&
                    <p className='text-yellow-950 text-xl font-semibold ms-2'>{taskName}</p>
                }

                {
                    isTaskAdding && < TaskInputField setNewTaskName={setNewTaskName} handleTaskNameSubmit={handleTaskNameSubmit}></TaskInputField>
                }

            </div>

            {/* This div holds the action buttons */}
            <div>
                {
                    taskName ?
                        <></>
                        :
                        <>
                            {
                                isTaskAdding ?
                                    <>
                                        <SubmitTaskButton handleTaskNameSubmit={handleTaskNameSubmit}></SubmitTaskButton>

                                        <CancelAddingTaskButton setIsTaskAdding={setIsTaskAdding}></CancelAddingTaskButton>
                                    </>
                                    :
                                    <>
                                        <AddTaskButton setIsTaskAdding={setIsTaskAdding}></AddTaskButton>
                                    </>
                            }
                        </>
                }
            </div>

        </div >
    );
};

export default SingleTask;