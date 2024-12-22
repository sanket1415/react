import React, { useState } from 'react';
import TaskList from './TaskList'; 
function App() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task"
        style={{ padding: '10px', width: 'calc(100% - 22px)', marginBottom: '10px' }}
      />
      <button onClick={handleAddTask} style={{ padding: '10px', width: '100%' }}>
        Add Task
      </button>
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
}

export default App;