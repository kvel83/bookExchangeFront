import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {DialogTitle, Typography, useTheme } from '@mui/material';
import { boxButtons, modal, modalTitle, typographyModal } from '../styles/styles';

interface ErrorModalProps {
    openError: boolean;
    onCloseError: () => void;
    message: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ openError, onCloseError, message }) => {

    const theme = useTheme();

    console.log("entre a ErrorModal");
    const handleClose = () =>{
        onCloseError();
      }
return (
    <>
    <Modal open={openError} onClose={handleClose}>
      <Box sx={modal}>
        <DialogTitle sx = {modalTitle}>
            Parece que hubo un problema
        </DialogTitle>
        <Box sx = {boxButtons}>
            <Typography variant="h6" sx={typographyModal}>{message}</Typography>
        </Box>
        <Button onClick={handleClose} variant="outlined" sx={{ mt: 2 }}>
          Cerrar
        </Button>
      </Box>
    </Modal>
    </>
  );
};

export default ErrorModal;