import * as React from 'react';
import Dialog from '@mui/material/Dialog';
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
};