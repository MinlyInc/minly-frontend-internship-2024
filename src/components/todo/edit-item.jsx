import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import PrimaryButton from '../buttons/primary-button';

const editItem = ({currentItem , items , setItems}) => {
    const [titleFieldValue, setTitleFieldValue] = useState('');

    const handleTitleTextFieldChange = (event) => {
        setTitleFieldValue(event.target.value);
    };

    const handleSubmit = () => {
        
    };


    return (
        <>
            <TextField
                id="add-item-text-field"
                label="edit task name"
                variant="outlined"
                required
                value={titleFieldValue}
                onChange={handleTitleTextFieldChange}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <PrimaryButton placeholder={'edit task'} onClick={handleSubmit}></PrimaryButton>
        </>
    );
};

export default AddItem;
