import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTitleDialog from '@/components/dialog/edit-title-dialog';
import { useContext } from 'react';
import TodoContext from '@/contexts/todo-context';

const TodoItemActions = ({ currentItem }) => {
  const { handleDeleteItem, handleEditItem } = useContext(TodoContext);
  return (
    <>
      <EditTitleDialog
        currentItem={currentItem}
        handleEditItem={handleEditItem}
      />
      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => handleDeleteItem(currentItem)}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default TodoItemActions;
