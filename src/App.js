import './App.css';
import AppFooter from './components/app-footer/AppFooter';
import AppHeader from './components/app-header/AppHeader';
import ResetButton from './components/reset-button/ResetButton';
import AppointedTime from './components/appointed-time/AppointedTime';
import TaskList from './components/task-list/TaskList';
import SchedulingSection from './components/scheduling-section/SchedulingSection'
import { useState } from 'react';

function App() {

  const [schedule, setSchedule] = useState(JSON.parse(localStorage.getItem('schedule')) || null)

  return (
    <div className='w-full pt-12 flex flex-col items-center justify-between gap-12 App'>
      <div className='w-[300px] flex flex-col items-center'>
        <AppHeader></AppHeader>

        <div className={`flex gap-3 mb-3`}>
          <ResetButton></ResetButton>
          <SchedulingSection schedule={schedule} setSchedule={setSchedule}></SchedulingSection>
        </div>

        <AppointedTime schedule={schedule}></AppointedTime>

        <TaskList></TaskList>
      </div>

      <AppFooter></AppFooter>
    </div>

  );
}

export default App;
