import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

// import DialogActions from '@mui/material/DialogActions';


import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ModalForm from './ModalForm';

export default function Modal({ open, handleClose}) {

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         افزودن/ویرایش کالا
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <ModalForm />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}