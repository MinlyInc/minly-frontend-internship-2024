import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddTaskButton = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim() === '') return;

    const newTask = {
      id: Date.now(), 
      title,
      completed: false,
      date: new Date().toISOString() 
    };

    addTask(newTask);
    setTitle(''); 
  };

  return (
    <Box sx={{ textAlign: 'center', width: '75%', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
        <TextField 
            label="Add a new task" 
            variant="outlined" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            fullWidth  
        />
  
          <Button variant="contained" color="primary" onClick={handleAddTask}> 
            Add Task 
          </Button>
    </Box>
    
  );
};

export default AddTaskButton;
