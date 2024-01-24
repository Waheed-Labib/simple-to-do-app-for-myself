import React, { useEffect, useState } from 'react';
import AddTaskButton from './buttons/add-buttons/AddTaskButton';
import CancelAddingTaskButton from './buttons/add-buttons/CancelAddingTaskButton';
import SubmitTaskButton from './buttons/add-buttons/SubmitTaskButton';
import TaskSuccessButton from './buttons/status-buttons/TaskSuccessButton';
import TaskEditButton from './buttons/edit-buttons/TaskEditButton';
import TaskCancelButton from './buttons/status-buttons/TaskCancelButton';
import getTaskFromLocalStorage from '../../../utilities/getTaskFromLocalStorage';
import setTaskToLocalStorage from '../../../utilities/setTaskToLocalStorage';
import AddTaskInputField from './input-fields/AddTaskInputField';
import SubmitEditButton from './buttons/edit-buttons/SubmitEditButton';
import CancelEditButton from './buttons/edit-buttons/CancelEditButton';
import EditTaskInputField from './input-fields/EditTaskInputField';


const SingleTask = ({ serialNo }) => {

    const task = getTaskFromLocalStorage(serialNo);

    const [taskName, setTaskName] = useState(task?.taskName || '')
    const [taskStatus, setTaskStatus] = useState(task?.taskStatus || '');

    const [isTaskAdding, setIsTaskAdding] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');

    const [isTaskEditing, setIsTaskEditing] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(taskName);

    const handleTaskSubmit = () => {
        const newTask = {
            taskName: newTaskName,
            taskStatus
        }
        setTaskToLocalStorage(newTask, serialNo);
        setTaskName(newTaskName);
        setEditedTaskName(newTaskName);
        setIsTaskAdding(false)
    }

    const handleTaskEdit = () => {
        const editedTask = {
            taskName: editedTaskName,
            taskStatus
        }
        setTaskToLocalStorage(editedTask, serialNo);
        setTaskName(editedTaskName);
        setIsTaskEditing(false)
    }

    useEffect(() => {
        if (taskStatus) handleTaskEdit()
    }, [taskStatus])

    return (
        <div className='w-full my-2 min-h-12 py-1 border-b-2 border-yellow-950 flex items-center justify-between'>
            {/* this div holds serialNo and Task Name / Input Field */}
            <div className='flex items-center gap-4'>

                <p className='bg-yellow-950 w-7 px-2 font-semibold text-yellow-500 rounded-sm'>{serialNo}</p>
                {
                    taskName && !isTaskEditing &&
                    <p className='text-yellow-950 text-xl font-semibold ms-2'>{taskName}</p>
                }

                {
                    isTaskAdding && < AddTaskInputField setNewTaskName={setNewTaskName} handleTaskSubmit={handleTaskSubmit} setIsTaskAdding={setIsTaskAdding} ></AddTaskInputField>
                }

                {
                    isTaskEditing && <EditTaskInputField setEditedTaskName={setEditedTaskName} handleTaskEdit={handleTaskEdit} setIsTaskEditing={setIsTaskEditing} defaultValue={taskName}></EditTaskInputField>
                }

            </div>

            {/* This div holds the action buttons or task status */}
            <div>
                {
                    taskName && !isTaskEditing ?
                        <>
                            {
                                taskStatus ?
                                    <p className={`${taskStatus === 'Completed' ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'} w-24 text-center py-1 rounded`}>{taskStatus}</p>
                                    :
                                    <>
                                        <TaskSuccessButton setTaskStatus={setTaskStatus} ></TaskSuccessButton>

                                        <TaskEditButton setIsTaskEditing={setIsTaskEditing}></TaskEditButton>

                                        <TaskCancelButton setTaskStatus={setTaskStatus} ></TaskCancelButton>
                                    </>
                            }
                        </>
                        :
                        <>
                            {
                                isTaskAdding ?
                                    <>
                                        <SubmitTaskButton handleTaskSubmit={handleTaskSubmit}></SubmitTaskButton>

                                        <CancelAddingTaskButton setIsTaskAdding={setIsTaskAdding}></CancelAddingTaskButton>
                                    </>
                                    :
                                    <>
                                        {
                                            !isTaskEditing &&
                                            <AddTaskButton setIsTaskAdding={setIsTaskAdding}></AddTaskButton>
                                        }

                                    </>
                            }

                            {
                                isTaskEditing &&
                                <>
                                    <SubmitEditButton handleTaskEdit={handleTaskEdit}></SubmitEditButton>

                                    <CancelEditButton setIsTaskEditing={setIsTaskEditing}></CancelEditButton>
                                </>
                            }
                        </>
                }
            </div>

        </div >
    );
};

export default SingleTask;