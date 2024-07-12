
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTitleDialog from '../dialog/edit-dialog';


const TodoItemActions = ({currentItem , allItems , setAllItems}) => {
 
    function deleteItem(){
        console.log('all items before delete : ' , allItems) ;
        console.log('all items after delete: ' , allItems.filter(item => item !== currentItem)  );
        setAllItems( allItems.filter(item => item !== currentItem)   );
    }


    return(
        <>
        <IconButton
            aria-label="delete"
            size="large"
            onClick={() => deleteItem()} >
            <DeleteIcon />
          </IconButton>
          <EditTitleDialog currentItem={currentItem} items={allItems} setItems={setAllItems}/>
        </>
        
    )
}


export default TodoItemActions;