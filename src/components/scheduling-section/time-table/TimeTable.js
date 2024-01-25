import React, { useState } from 'react';
import './TimeTable.css';
import { FaCheck } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const TimeTable = ({ schedule, setSchedule, isTimeTableShown, setIsTimeTableShown }) => {
    const days = ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thurs'];
    const times = ['Fazr', 'Zuhr', 'Asr', 'Magrib', 'Esha'];

    const [startDay, setStartDay] = useState(schedule?.startDay || '');
    const [startTime, setStartTime] = useState(schedule?.startTime || '');

    const [endDay, setEndDay] = useState(schedule?.endDay || '');
    const [endTime, setEndTime] = useState(schedule?.endTime || '');

    const handleScheduleSubmit = () => {
        const schedule = {
            startDay,
            startTime,
            endDay,
            endTime
        }
        const scheduleStringified = JSON.stringify(schedule)
        localStorage.setItem('schedule', scheduleStringified)
        setSchedule(schedule);
        setIsTimeTableShown(false);
    }

    return (
        <div className={`time-table w-screen bg-yellow-950 opacity-90 flex flex-col gap-8 items-center py-24`}>

            <div className='flex flex-col gap-5 w-[300px]'>
                <p className='text-white font-bold text-2xl'>Your Schedule <span className='text-yellow-500'>STARTS :</span></p>

                <select onChange={e => setStartDay(e.target.value)} className='rounded p-1 font-semibold w-full'>
                    <option disabled selected>Pick a day</option>
                    {
                        days.map(day => {
                            if (startDay === day) return <option key={day} value={day} selected>{day}</option>
                            return <option key={day} value={day}>{day}</option>
                        })
                    }
                </select>

                <select onChange={e => setStartTime(e.target.value)} className='rounded p-1 font-semibold w-full'>
                    <option disabled selected>Pick a time</option>
                    {
                        times.map(time => {
                            if (startTime === time) return <option key={time} value={time} selected>{time}</option>
                            return <option key={time} value={time}>{time}</option>
                        })
                    }
                </select>
            </div>

            <div className='flex flex-col gap-5 w-[300px]'>
                <p className='text-white font-bold text-2xl'>Your Schedule <span className='text-yellow-500'>ENDS :</span></p>

                <select onChange={e => setEndDay(e.target.value)} className='rounded p-1 font-semibold w-full'>
                    <option disabled selected>Pick a day</option>
                    {
                        days.map(day => {
                            if (endDay === day) return <option key={day} value={day} selected>{day}</option>
                            return <option key={day} value={day}>{day}</option>
                        })
                    }
                </select>

                <select onChange={e => setEndTime(e.target.value)} className='rounded p-1 font-semibold w-full'>
                    <option disabled selected>Pick a time</option>
                    {
                        times.map(time => {
                            if (endTime === time) return <option key={time} value={time} selected>{time}</option>
                            return <option key={time} value={time}>{time}</option>
                        })
                    }
                </select>
            </div>

            <div className='flex gap-16 text-4xl mt-8'>
                <div onClick={handleScheduleSubmit} className='text-green-300 p-2 border rounded-full border-green-300'>
                    <FaCheck></FaCheck>
                </div>

                <div onClick={() => setIsTimeTableShown(false)} className='text-red-300 p-2 border rounded-full border-red-300'>
                    <RxCross1></RxCross1>
                </div>

            </div>
        </div>
    );
};

export default TimeTable;