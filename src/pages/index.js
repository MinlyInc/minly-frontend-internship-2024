/* we will call the TodoList, all of the list. when we 
   add an item, the TodoList component wil call the 
   TodoItem component. Also, when any of the buttons 
   Add Task and Sort are pressed, we should call TodoItem */

import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import AddTaskButton from '../components/AddTaskButton';
import SortButton from '../components/SortButton';
import { Typography, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
// import { background } from '../constants/images'; 
// import background from "../assets/images/background.jpg";



const Home = () => {const [tasks, setTasks] = useState([
  { id: 1, title: 'Create a React project', completed: false, date: '2022-01-06T05:23:00' },
  { id: 2, title: 'Learn React', completed: false, date: '2022-01-06T05:22:00' },
  { id: 3, title: 'Create a Todo App', completed: true, date: '2022-01-06T05:21:00' }
]);

const addTask = (task) => {
  setTasks([...tasks, task]);
};

const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};

const editTask = (id, newTask) => {
  setTasks(tasks.map(task => (task.id === id ? newTask : task)));
};

const TaskCompletion = (id) => {
  setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
};

const sortTasks = (criteria) => {
  const sortedTasks = [...tasks]; 

  switch (criteria) {
    case 'date':
      sortedTasks.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case 'status':
      sortedTasks.sort((a, b) => a.completed - b.completed);
      break;
    default:
      break;
  }

  setTasks(sortedTasks);
};

const [filter, setFilter] = useState('all'); 

const filterChange = (event) => {
  setFilter(event.target.value);
};

const getFilteredTasks = () => {
  switch (filter) {
    case 'completed':
      return tasks.filter(task => task.completed);
    case 'incomplete':
      return tasks.filter(task => !task.completed);
    case 'all':
    default:
      return tasks;
  }
};

return (

<div>
  <Box sx={{
            backgroundImage: 'url(/images/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >       

  <scrollableWindow>  
    <Box sx={{ maxWidth: 800, mx: 'auto', my: 4, p: 3, border: '1px solid #ccc', borderRadius: 4, backgroundColor: '#F0F0F0' }}>
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography
          variant="h3"
          component="div"
          fontWeight="bold"
          sx={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '3rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#37474F', 
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
        TODO LIST
      </Typography>
    </Box>

    <AddTaskButton addTask={addTask} />
  
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <SortButton sortTasks={sortTasks} />
    </Box>
    
    <Box sx={{ textAlign: 'right', minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="filter-select-label">Filter by</InputLabel>
          <Select
            labelId="filter-select-label"
            id="filter-select"
            value={filter}
            onChange={filterChange}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="completed">Done</MenuItem>
            <MenuItem value="incomplete">To Do</MenuItem>
          </Select>
        </FormControl>
      </Box>


      <Box sx={{ alignItems: 'center', border: '1px solid #ccc', borderRadius: 4, backgroundColor: '#E6E6E3', p: 3, mb: 4 }}> 
        <TodoList 
          tasks={getFilteredTasks()} 
          deleteTask={deleteTask} 
          editTask={editTask} 
          TaskCompletion={TaskCompletion} 
        />
       </Box>
      </Box>
    </scrollableWindow>
    </Box>
  </div> 
);
};


export default Home;
