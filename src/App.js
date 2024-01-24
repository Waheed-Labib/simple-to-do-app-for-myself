import './App.css';
import AppHeader from './components/app-header/AppHeader';
import TaskList from './components/task-list/TaskList';

function App() {
  return (
    <div className='w-full min-h-screen py-12 flex items-center justify-center App'>
      <div className='w-72'>
        <AppHeader></AppHeader>
        <TaskList></TaskList>
      </div>
    </div>

  );
}

export default App;
