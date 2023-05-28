import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {DialogTitle, Typography, useTheme } from '@mui/material';

interface LoginFormProps {
  open: boolean;
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ open, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("aqui va la logica de validacion");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 300 }}>
        <DialogTitle sx = {{backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, textAlign: 'center', borderRadius: '10px', marginBottom:'2rem'}}>Inicar sesión</DialogTitle>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            value={username}
            onChange={handleUsernameChange}
            fullWidth
            required
            sx = {{mb:2}}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            required
            sx = {{mb:3}}
          />
        <Box sx = {{display: 'flex', gap: 2, justifyContent: 'end'}}>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Iniciar sesión
            </Button>
            <Button onClick={onClose} variant="outlined" sx={{ mt: 2 }}>
              Cerrar
            </Button>
        </Box>
        <Typography variant="body2" sx = {{color: theme.palette.info, textAlign: 'end', marginTop: '1rem'}}>
          <a href="#">¿Se te olvidó la contraseña?</a>
        </Typography>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginForm;
