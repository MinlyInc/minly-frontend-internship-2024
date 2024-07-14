import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import EditTitleDialog from '@/components/dialog/edit-title-dialog';

const TodoItemActions = ({ currentItem, handleEdit, handleDelete }) => {
  return (
    <>
      <EditTitleDialog currentItem={currentItem} handleEditItem={handleEdit} />

      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => handleDelete(currentItem)}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default TodoItemActions;
