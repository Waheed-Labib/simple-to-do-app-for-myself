import React from 'react';
import SingleTask from './SingleTask';

const TaskList = () => {
    const tasks = [];

    for (let i = 0; i < 10; i++) {
        tasks.push(<SingleTask key={i} serialNo={i + 1} taskName={''}></SingleTask>);
    }

    return <div className='w-full my-8'>
        {tasks}
    </div>;
};

export default TaskList;