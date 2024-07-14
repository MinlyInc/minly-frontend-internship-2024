import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function EditTitleDialog({ currentItem, handleEditItem }) {
  const [open, setOpen] = useState(false);

  const [titleFieldValue, setTitleFieldValue] = useState(
    `${currentItem.title} `
  );

  const handleTitleTextFieldChange = (event) => {
    setTitleFieldValue(event.target.value);
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
        size="large"
        onClick={() => handleClickOpen()}
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
              id="edit-item-text-field"
              label="task name"
              variant="outlined"
              required
              value={titleFieldValue}
              onChange={handleTitleTextFieldChange}
            />
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              handleEditItem(currentItem, titleFieldValue);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
