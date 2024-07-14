import React, { useState } from 'react';
import { Checkbox, TextField, Button, Box, Typography } from '@mui/material';

const TodoItem = ({ task, deleteTask, editTask, TaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const EditClick = () => {
    setIsEditing(true);
  };

  const SaveClick = () => {
    editTask(task.id, { ...task, title: editTitle });
    setIsEditing(false);
  };

  const CancelClick = () => {
    setIsEditing(false);
    setEditTitle(task.title);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 2, border: '1px solid #ccc', borderRadius: 1, backgroundColor: '#FFFFFF'  }}>
      <Checkbox
        checked={task.completed}
        onChange={() => TaskCompletion(task.id)}
      />
      {isEditing ? (
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 2 }}>
          <TextField
            variant="outlined"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={SaveClick}>Save</Button>
          <Button variant="outlined" color="secondary" onClick={CancelClick}>Cancel</Button>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="body1">{task.title}</Typography>
            <Typography variant="caption" color="textSecondary">{formatDate(task.date)}</Typography>
          </Box>
          <Box>
            <Button variant="text" color="primary" onClick={EditClick}>Edit</Button>
            <Button variant="text" color="error" onClick={() => deleteTask(task.id)}>Delete</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TodoItem;
