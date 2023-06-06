import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import UserInformation from '../interfaces/userInformation';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';

interface ProfileMenuOptions {
  userInformation: UserInformation;
}

export default function ProfileMenu({ userInformation }: ProfileMenuOptions) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true); // Estado local para controlar si el usuario ha cerrado sesión
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const theme = useTheme();

  React.useEffect(() => {
    // Verificar si el usuario está almacenado en el localStorage
    const storedUserInformation = localStorage.getItem('userInformation');
    if (!storedUserInformation) {
      setIsLoggedIn(false); // Actualizar el estado local si el usuario no está almacenado
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    localStorage.removeItem('userInformation');
    setIsLoggedIn(false); // Actualizar el estado local al cerrar sesión
    navigate('/');
    setAnchorEl(null);
  };

  if (!isLoggedIn) {
    return null; // No renderizar nada si el usuario ha cerrado sesión
  }

  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Bienvenido {userInformation.userName}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
      </Menu>
    </>
  );
}
