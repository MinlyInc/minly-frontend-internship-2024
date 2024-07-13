import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import PrimaryButton from '../buttons/primary-button';

const AddItem = ({ items, setItems }) => {
  const [titleFieldValue, setTitleFieldValue] = useState('');

  const handleTitleTextFieldChange = (event) => {
    setTitleFieldValue(event.target.value);
  };

  const handleSubmit = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    let lstId = 0;
    for (let i = 0, length = items.length; i < length; ++i) {
      lstId = Math.max(lstId, items[i].id);
    }
    console.log('new task : ', {
      id: lstId + 1,
      title: titleFieldValue,
      createdAt: formattedDate,
      finished: false,
    });
    setItems([
      ...items,
      {
        id: lstId + 1,
        title: titleFieldValue,
        createdAt: formattedDate,
        finished: false,
      },
    ]);
  };

  return (
    <>
      <TextField
        id="add-item-text-field"
        label="task name"
        variant="outlined"
        required
        value={titleFieldValue}
        onChange={handleTitleTextFieldChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <PrimaryButton
        placeholder={'add task'}
        onClick={handleSubmit}
      ></PrimaryButton>
    </>
  );
};

export default AddItem;
