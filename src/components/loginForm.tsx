import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import {DialogTitle, Typography, useTheme } from '@mui/material';
import loginValidationSchema from '../validation/validationSchema';
import auth from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { setDefaultResultOrder } from 'dns';
import { setLocale } from 'yup';

interface LoginFormProps {
  open: boolean;
  onClose: () => void;
}


const LoginForm: React.FC<LoginFormProps> = ({ open, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{[key: string]: string}>({});
  const navigate = useNavigate();
  const theme = useTheme();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError({});

      // Validación de los campos
      await loginValidationSchema.validate({ username, password }, {abortEarly: false});

      // Lógica de autenticación
      await auth.login(username, password);
      onClose();
      navigate('/profile'); // Redireccionar a la página del perfil
      window.location.reload();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: {[key: string]:string } = {};

        error.inner.forEach((err) => {
          if (err.path && !validationErrors[err.path]){
            validationErrors[err.path] = err.message;
          }
        });
        console.log(validationErrors);
        setError(validationErrors);

      } else {
        console.error(error + "estos no son errores de yup");
      }
    }
      setLoading(false);
      setUsername('');
      setPassword('');
      // setError({
        // username:"",
        // password: "",
      // });
  };

  const handleClose = () =>{
    setError({
      username: "",
      password: "",
    });
    onClose();
  }


  return (
    <>
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 300 }}>
        <DialogTitle sx = {{backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, textAlign: 'center', borderRadius: '10px', marginBottom:'2rem'}}>Inicar sesión</DialogTitle>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            value={username}
            onChange={handleUsernameChange}
            error = {!!error.username}
            helperText={error.username}
            fullWidth
            required
            sx = {{mb:2}}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={!!error.password}
            helperText={error.password}
            fullWidth
            required
            sx = {{mb:3}}
          />
        <Box sx = {{display: 'flex', gap: 2, justifyContent: 'end'}}>
            <Button  type="submit" variant="contained" sx={{ mt: 2 }}>
              Iniciar sesión
            </Button>
            <Button onClick={handleClose} variant="outlined" sx={{ mt: 2 }}>
              Cerrar
            </Button>
        </Box>
        <Typography variant="body2" style={{color: theme.typography.body2.color, textAlign: theme.typography.body2.textAlign, marginTop: theme.typography.body2.marginTop}}>
          <a href="#">¿Se te olvidó la contraseña?</a>
        </Typography>
        </form>
      </Box>
    </Modal>
    </>
  );
};


export default LoginForm;