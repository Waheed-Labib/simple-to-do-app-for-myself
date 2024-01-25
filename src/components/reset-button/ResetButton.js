import React from 'react';
import { GrPowerReset } from "react-icons/gr";

const ResetButton = () => {

    const handleReset = () => {
        localStorage.removeItem('task-1')
        localStorage.removeItem('task-2')
        localStorage.removeItem('task-3')
        localStorage.removeItem('task-4')
        localStorage.removeItem('task-5')
        localStorage.removeItem('task-6')
        localStorage.removeItem('task-7')
        localStorage.removeItem('task-8')
        localStorage.removeItem('task-9')
        localStorage.removeItem('task-10')

        window.location.reload()
    }

    return (
        <div className='w-12 h-10 mt-3 text-3xl border border-yellow-950 text-yellow-950 rounded pt-1 ps-[6px] hover:border-yellow-600 hover:text-yellow-600' onClick={handleReset}>
            <GrPowerReset></GrPowerReset>
        </div>
    );
};

export default ResetButton;