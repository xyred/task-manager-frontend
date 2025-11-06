// import { useState } from 'react'

import './App.css';
import TaskList from './components/TaskList';

const mockTasks = [
    { id: 1, title: "Task 1", description: "Description for Task 1" },
    { id: 2, title: "Task 2", description: "Description for Task 2" },
];

const App = () => {
  return (
    <>
      <h1>Task Manager</h1>
      <TaskList tasks={mockTasks} />
    </>
  )
};

export default App;
