import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {DialogTitle, Typography, useTheme } from '@mui/material';

interface ErrorModalProps {
    open: boolean;
    onClose: () => void;
    message: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ open, onClose, message }) => {

    const theme = useTheme();

    const handleClose = () =>{
        onClose();
      }
return (
    <>
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 300 }}>
        <DialogTitle sx = {{backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, textAlign: 'center', borderRadius: '10px', marginBottom:'2rem'}}>
            Parece que hubo un problema
        </DialogTitle>
        <Box sx = {{display: 'flex', gap: 2, justifyContent: 'end'}}>
            
            <Button onClick={handleClose} variant="outlined" sx={{ mt: 2 }}>
              Cerrar
            </Button>
        </Box>
      </Box>
    </Modal>
    </>
  );
};

export default ErrorModal;