import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {DialogTitle, Typography, useTheme } from '@mui/material';

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
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 300 }}>
        <DialogTitle sx = {{backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, textAlign: 'center', borderRadius: '10px', marginBottom:'2rem'}}>
            Parece que hubo un problema
        </DialogTitle>
        <Box sx = {{display: 'flex', gap: 2, justifyContent: 'end'}}>
            <Typography variant="h8" style={{color: theme.typography.body2.color, textAlign: theme.typography.body2.textAlign, marginTop: theme.typography.body2.marginTop}}>{message}</Typography>
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