import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import UserInformation from '../interfaces/userInformation';
import { useNavigate } from 'react-router-dom';
import { buttonsNavBar } from '../styles/styles';

interface ProfileMenuOptions {
  userInformation: UserInformation;
  isLoggedIn: boolean;
  onLogout: () => void;
  onLandingMenuClose: () => void;
}

export default function ProfileMenu({
  userInformation,
  isLoggedIn,
  onLogout,
  onLandingMenuClose,
}: ProfileMenuOptions) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    localStorage.removeItem('userInformation');
    onLogout(); // Llamar a la función onLogout al cerrar sesión
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
        sx={buttonsNavBar}
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
        <MenuItem onClick={() => { handleClose(); onLandingMenuClose(); }}>Cerrar sesión</MenuItem>
      </Menu>
    </>
  );
}
