import { Typography, Checkbox, FormGroup, FormControlLabel, TextField, Button, Box, InputLabel, Select, MenuItem} from "@mui/material";
import { useState } from "react";

export const ToDoCard = ({ id, title, updateTitle, handleDelete, editMode = false}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditMode, setIsEditMode] = useState(editMode);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleEditModeToggle = () => {
    if (isEditMode) {
      updateTitle(id, editedTitle);
    }
    setIsEditMode(!isEditMode);
  };

  return (
    <Box display="flex">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={(event) => setIsChecked(event.target.checked)}
            />
          }
          label={
            isEditMode ? (
              <TextField
                value={editedTitle}
                onChange={(event) => setEditedTitle(event.target.value)}
              />
            ) : (
              <Typography style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
                {title}
              </Typography>
            )
          }
        />
      </FormGroup>
      <Button onClick={handleEditModeToggle}>
        {isEditMode ? 'Save' : 'Edit'}
      </Button>
      <Button onClick={()=>{{handleDelete(id)}}}>Delete</Button>
        {}
    </Box>
  );
};
