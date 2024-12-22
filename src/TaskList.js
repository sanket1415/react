import React from 'react';

function TaskList({ tasks, toggleTaskCompletion }) {
  return (
    <ul style={{ listStyleType: 'none', padding: '0' }}>
      {tasks.map((task, index) => (
        <li
          key={index}
          onClick={() => toggleTaskCompletion(index)}
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            cursor: 'pointer',
            padding: '10px 0',
            borderBottom: '1px solid #ccc',
            backgroundColor: task.completed ? '#f0f0f0' : '#fff', 
            transition: 'background-color 0.3s', 
          }}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;