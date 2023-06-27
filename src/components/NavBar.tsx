import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/logo.png';
import { useTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState } from 'react';
import LoginForm from './loginForm';
import RegistrationForm from './registrationForm';
import UserInformation from '../interfaces/userInformation';
import ProfileMenu from './profileMenu';
import LandingMenu from './landingMenu';
import { navBarBox, navBarChange } from '../styles/styles';

function NavBar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setRegistrationForm] = useState(false);
  const [userInformation, setUserInformation] = useState<UserInformation | null>(() => {
    const userFromLS = localStorage.getItem('userInformation');
    if (userFromLS) return JSON.parse(userFromLS) as UserInformation;
    return null;
  });
  const [showLandingMenu, setShowLandingMenu] = useState(false);

  const handleOpenRegistrationForm = () => {
    setRegistrationForm(true);
  };
  const handleCloseRegistrationForm = () => {
    setRegistrationForm(false);
  };

  const handleOpenForm = () => {
    setShowLoginForm(true);
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setUserInformation(null);
    setShowLandingMenu(true); // Mostrar el componente LandingMenu después de cerrar sesión
  };

  const handleLandingMenuClose = () => {
    setShowLandingMenu(false);
  };

  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className="full-app-navbar">
        <Toolbar disableGutters>
          <img src={logo} alt="Logo" className="logo-image" style={theme.logoImage} />
          <Box sx={navBarBox}>
            <Box sx={navBarChange}>
              {!userInformation && !showLandingMenu && (
                <LandingMenu handleOpenForm={handleOpenForm} handleCloseForm={handleCloseForm} handleOpenRegistrationForm={handleOpenRegistrationForm} handleCloseRegistrationForm={handleCloseRegistrationForm} />
              )}
              {userInformation && (
                <>
                  <ProfileMenu
                    userInformation={userInformation}
                    isLoggedIn={true}
                    onLogout={handleLogout}
                    onLandingMenuClose={handleLandingMenuClose}
                  />
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {showLoginForm && <LoginForm open={showLoginForm} onClose={handleCloseForm} />}
      {showRegistrationForm && <RegistrationForm open={showRegistrationForm} onClose={handleCloseRegistrationForm} />}
    </>
  );
}

export default NavBar;
