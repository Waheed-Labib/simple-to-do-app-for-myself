import './App.css';
import AppFooter from './components/app-footer/AppFooter';
import AppHeader from './components/app-header/AppHeader';
import ResetButton from './components/reset-button/ResetButton';
import TaskList from './components/task-list/TaskList';

function App() {

  return (
    <div className='w-full h-[1000px] py-12 flex flex-col items-center justify-between relative App'>
      <div className='w-[300px] flex flex-col items-center'>
        <AppHeader></AppHeader>
        <ResetButton></ResetButton>
        <TaskList></TaskList>
      </div>
      <AppFooter></AppFooter>
    </div>

  );
}

export default App;
