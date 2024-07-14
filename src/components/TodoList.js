import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, deleteTask, editTask, TaskCompletion }) => {
  return (
    <div>
      {tasks.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          editTask={editTask} 
          TaskCompletion={TaskCompletion} 
        />
      ))}
    </div>
  );
};

export default TodoList;
