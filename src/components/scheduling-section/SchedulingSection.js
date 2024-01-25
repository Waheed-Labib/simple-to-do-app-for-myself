import React, { useState } from 'react';
import { FaRegClock } from "react-icons/fa";
import TimeTable from './time-table/TimeTable';

const ScheduleSection = ({ schedule, setSchedule }) => {

    const [isTimeTableShown, setIsTimeTableShown] = useState(false)

    return (
        <div>
            <div className='w-12 h-10 mt-3 text-3xl border border-yellow-950 text-yellow-950 rounded pt-1 ps-[6px]  hover:border-yellow-600 hover:text-yellow-600' onClick={() => setIsTimeTableShown(true)}>
                <FaRegClock></FaRegClock>
            </div>
            {
                isTimeTableShown &&
                <TimeTable
                    schedule={schedule}
                    setSchedule={setSchedule}
                    isTimeTableShown={isTimeTableShown}
                    setIsTimeTableShown={setIsTimeTableShown}
                ></TimeTable>
            }
        </div>
    );
};

export default ScheduleSection;