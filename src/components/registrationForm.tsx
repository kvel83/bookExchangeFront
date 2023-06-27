import { DialogTitle } from '@mui/material';
import React, { useState } from 'react';

import auth from '../services/auth.service';
import RegistrationFormInt from '../interfaces/registrationForm';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { boxButtons, button, modal, modalTitle } from '../styles/styles';
import isStrongPassword from 'validator/lib/isStrongPassword';
import validator from 'validator';
import ErrorModal from './errorModal';
import PasswordTextField from './passwordTextField';

interface UserRegistrationProps {
  open: boolean;
  onClose: () => void;
}

const UserRegistration: React.FC<UserRegistrationProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState<RegistrationFormInt>({
    userName: '',
    userEmail: '',
    userPassword: '',
    userAge: 0,
    role: ''
  });
  const [error, setError] = useState<{[key: string]: string}>({});
  const [passwordToCheck, setPasswordToCheck] = useState('');
  const [openError, setOpenError] = useState(false);

  const handleOpenError = () =>{
    setOpenError(true);
  };
  const handleCloseError = () => {
    setOpenError(false);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevState) => ({
        ...prevState,
        userName: value,
      }));
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevState) => ({
        ...prevState,
        userAge: parseInt(value,10),
      }));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevState) => ({
        ...prevState,
        userEmail: value,
      }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevState) => ({
        ...prevState,
        userPassword: value,
    }));
  };

  const handlePasswordChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPasswordToCheck(value);
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError({});
    if(!validator.isEmail(formData.userEmail)){
        setError({email: 'Ingrese un email válido'});
        setFormData((prevState) => ({
            ...prevState,
            userEmail: '',
        }));
        return;
    }else if(!(formData.userAge >= 10 && formData.userAge <= 120)){
        setError({age: 'La edad permitida es entre 10 y 120 años'});
        setFormData((prevState) => ({
            ...prevState,
            userAge: 0,
        }));
        return;
    }else if(!isStrongPassword(formData.userPassword,{minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 1})){
        setError({password: 'Contraseña debe tener un largo de al menos 8 caracteres, con una mayúscula, un número y un símbolo'});
        setFormData((prevState) => ({
            ...prevState,
            userPassword: '',
        }));
        return;
    }else if (formData.userPassword !== passwordToCheck){
        setError({passwordToCheck: 'Las contraseñas deben coincidir'});
        setPasswordToCheck('');
        return;
    }else{
        try {
            setError({});
            const response = await auth.register(formData);
            if (response.status === 200){
                onClose();
                setError({general: "Usuario registrado existosamente"});
                handleOpenError();
            }else if (response === 'Request failed with status code 400'){
                setError({general: "Nombre de usuario ya está en uso, por favor elija uno diferente"});
                handleOpenError();
                setFormData((prevState) => ({
                    ...prevState,
                    userName: '',
                    userEmail: '',
                    userPassword: '',
                    userAge: 0
                }));
                setPasswordToCheck('');
            }
        } catch (error) {
            console.error(error);
            setError({ general: 'Presentamos problemas con el servidor, intente más tarde' });
            handleOpenError();
            setFormData((prevState) => ({
                ...prevState,
                userName: '',
                userEmail: '',
                userPassword: '',
                userAge: 0
            }));
            setPasswordToCheck('');
        }
    }
  };
  const handleClose = () => {
    setFormData({
      userName: '',
      userEmail: '',
      userPassword: '',
      userAge: 0,
      role: ''
    });
    onClose();
  };

  return (
<>
    <Modal open={open} onClose={handleClose} BackdropProps={{onClick: undefined}}>
      <Box sx={modal}>
        <DialogTitle sx = { modalTitle }>Registra tu cuenta</DialogTitle>
        <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre de usuario"
          value={formData.userName}
          onChange={handleUsernameChange}
          error = {!!error.username}
          helperText={error.username}
          fullWidth
          required
          sx = {{mb:2}}
        />
        <TextField
          label="Email"
          value={formData.userEmail}
          onChange={handleEmailChange}
          error = {!!error.email}
          helperText={error.email}
          fullWidth
          required
          sx = {{mb:2}}
        />
        <TextField
          label="Edad"
          type="number"
          value={formData.userAge}
          onChange={handleAgeChange}
          inputProps={{
            inputMode: 'numeric',
            style: { MozAppearance: 'textfield' } as React.CSSProperties,
          }}
          error = {!!error.age}
          helperText={error.age}
          fullWidth
          required
          sx = {{mb:2}}
        />
        <PasswordTextField
          label="Contraseña"
          value={formData.userPassword}
          onChange={handlePasswordChange}
          error={!!error.password}
          helperText={error.password}
        />
        <PasswordTextField
          label="Reingresa la contraseña"
          value={passwordToCheck}
          onChange={handlePasswordChangeCheck}
          error={!!error.passwordToCheck}
          helperText={error.passwordToCheck}
        />
        <Box sx = {boxButtons}>
            <Button  type="submit" variant="contained" sx={button}>
              Registrar cuenta
            </Button>
            <Button onClick={handleClose} variant="outlined" sx={button}>
              Cerrar
            </Button>
        </Box>
        </form>
      </Box>
    </Modal>
    {openError && (
        <ErrorModal openError={openError} onCloseError={handleCloseError} message={error.general} />
    )}
</>
  );
};

export default UserRegistration;
