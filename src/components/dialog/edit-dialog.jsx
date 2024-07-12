import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function EditTitleDialog({currentItem , items , setItems}) {
  const [open, setOpen] = useState(false);
  const [titleFieldValue, setTitleFieldValue] = useState(currentItem.title);

  const handleTitleTextFieldChange = (event) => {
      setTitleFieldValue(event.target.value);
  };

  const handleSubmit = () => {
      let indexOfEditedItem = -1;
      for(let i = 0 , length = items.length ; i < length ; ++i){
        if(items[i].id == currentItem.id){
          indexOfEditedItem = i ;
          break;
        }
      }
      // edit the value of the item
      items[indexOfEditedItem].title = titleFieldValue ;
      setItems([...items])
  };


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
     <IconButton
           aria-label="edit"
           size='large'
           onClick={()=> handleClickOpen()}
           >
                <EditIcon />
      </IconButton>
    
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Edit title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>

          <Typography gutterBottom>
          <TextField
                id="add-item-text-field"
                label="task name"
                variant="outlined"
                required
                value={titleFieldValue}
                onChange={handleTitleTextFieldChange}
            />
          </Typography>

        </DialogContent>


        <DialogActions>
          <Button autoFocus onClick={() => {handleSubmit() ; handleClose() ;}}>
            Save Changes
          </Button>
        </DialogActions>


      </BootstrapDialog>
    </React.Fragment>
  );
}

