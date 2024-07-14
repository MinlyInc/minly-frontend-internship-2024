import React from 'react';
import { Button } from '@mui/material';


const SortButton = ({ sortTasks }) => {
  return (
    <div>
      <Button onClick={() => sortTasks('date')}>Sort by Date</Button>
      <Button onClick={() => sortTasks('status')}>Sort by Status</Button>
    </div>
  );
};

export default SortButton;
