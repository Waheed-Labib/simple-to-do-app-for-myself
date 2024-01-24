import './App.css';
import AddTaskButton from './components/add-task-button/AddTaskButton';
import AppHeader from './components/app-header/AppHeader';
import TaskList from './components/task-list/TaskList';

function App() {
  return (
    <div className='w-full h-screen flex items-center justify-center App'>
      <div className='w-72'>
        <AppHeader></AppHeader>
        <TaskList></TaskList>
        <AddTaskButton></AddTaskButton>
      </div>
    </div>

  );
}

export default App;
