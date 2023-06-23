import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import isStrongPassword from 'validator/lib/isStrongPassword';
import {DialogTitle, Typography } from '@mui/material';
import auth from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import ErrorModal from './errorModal';
import { boxButtons, button, modal, modalTitle, typographyModal } from '../styles/styles';

interface LoginFormProps {
  open: boolean;
  onClose: () => void;
}


const LoginForm: React.FC<LoginFormProps> = ({ open, onClose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<{[key: string]: string}>({});
  const [openError, setOpenError] = useState(false);
  const navigate = useNavigate();

  const handleOpenError = () =>{
    setOpenError(true);
  };
  const handleCloseError = () => {
    setOpenError(false);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
      setError({});

      //Validación de forma de contraseña
      if(!isStrongPassword(password,{minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 1})){
        setError({password: 'Contraseña incorrecta'});
        setUsername('');
        setPassword('');
        return;
      }

      try {
        setError({});
        const response = await auth.login(username, password);
        if(response.status === 200){
          navigate('/dashboard'); // Redireccionar a la página del perfil
          onClose();
          window.location.reload();
        }else{
          if (response.status === 401){
            setError({general: "Credenciales inválidas"});
            handleOpenError();
          }else if(response.status === 404){
            setError({general: "Usuario incorrecto"})
            handleOpenError();
          }else{
            setError({general: "Presentamos problemas con el servidor, intente mas tarde"});
            handleOpenError();
          }
        }
      }catch (error) {
        console.error(error);
        setError({ general: 'Presentamos problemas con el servidor, intente más tarde' });
        handleOpenError();
      }
      setUsername('');
      setPassword('');
}

  const handleClose = () =>{
    setError({
      username: "",
      password: "",
    });
    setUsername('');
    setPassword('');
    onClose();
  }


  return (
    <>
    <Modal open={open} onClose={handleClose}>
      <Box sx={modal}>
        <DialogTitle sx = { modalTitle }>Inicar sesión</DialogTitle>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre de usuario"
            value={username}
            onChange={handleUsernameChange}
            error = {!!error.username}
            helperText={error.username}
            fullWidth
            required
            sx = {{mb:2}}
          />
          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={!!error.password}
            helperText={error.password}
            fullWidth
            required
            sx = {{mb:3}}
          />
        <Box sx = {boxButtons}>
            <Button  type="submit" variant="contained" sx={button}>
              Iniciar sesión
            </Button>
            <Button onClick={handleClose} variant="outlined" sx={button}>
              Cerrar
            </Button>
        </Box>
        <Typography variant="body2" sx={typographyModal}>
          <a href="#">¿Se te olvidó la contraseña?</a>
        </Typography>
        </form>
      </Box>
    </Modal>
    {openError && (
        <ErrorModal openError={openError} onCloseError={handleCloseError} message={error.general} />
    )}
    </>
  );
};


export default LoginForm;