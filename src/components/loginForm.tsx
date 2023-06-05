import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import {DialogTitle, Typography, useTheme } from '@mui/material';
import auth from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import ErrorModal from './errorModal';
import { AppContext } from '../context/AppContext';

interface LoginFormProps {
  open: boolean;
  onClose: () => void;
}


const LoginForm: React.FC<LoginFormProps> = ({ open, onClose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{[key: string]: string}>({});
  const [openError, setOpenError] = useState(false);
  const {isLoggedIn, handleLogin} = useContext(AppContext);
  const navigate = useNavigate();
  const theme = useTheme();

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

const validationSchema = Yup.object().shape({
    username: Yup.string().required('El usuario es obligatorio'),
    password: Yup.string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      // .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/, 'La contraseña debe incluir al menos una mayúscula y un número')
      .required('La contraseña es obligatoria'),
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError({});

      // Validación de los campos
      validationSchema.validateSync({ username, password }, {abortEarly: false});

      // Lógica de autenticación
      const response = await auth.login(username, password);

      if(response.status === 200){
        onClose();
        handleLogin();
        navigate('/dashboard'); // Redireccionar a la página del perfil
        window.location.reload();
      }else{
        if (response.status === 401){
          setError({general: "Credenciales inválidas"});
          handleOpenError();
        }
        else{
          setError({general: "Presentamos problemas con el servidor, intente mas tarde"});
          handleOpenError();
        }
      }
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
        setError({general: "Presentamos problemas con el servidor, intente mas tarde"});
      }
    }
      setLoading(false);
      setUsername('');
      setPassword('');
      console.log(error);
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
    {openError && (
        <ErrorModal openError={openError} onCloseError={handleCloseError} message={error.general} />
    )}
    </>
  );
};


export default LoginForm;