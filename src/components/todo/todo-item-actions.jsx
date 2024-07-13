import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import EditTitleDialog from '@/components/dialog/edit-title-dialog';

const TodoItemActions = ({ currentItem, allItems, setAllItems }) => {
  function deleteItem() {
    setAllItems(allItems.filter((item) => item !== currentItem));
  }

  return (
    <>
      <IconButton aria-label="delete" size="large" onClick={() => deleteItem()}>
        <DeleteIcon />
      </IconButton>
      <EditTitleDialog
        currentItem={currentItem}
        items={allItems}
        setItems={setAllItems}
      />
    </>
  );
};

export default TodoItemActions;
