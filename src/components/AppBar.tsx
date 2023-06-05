import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import logo from '../assets/logo.png'
import { useTheme } from '@mui/material/styles';
import { Button, CssBaseline } from '@mui/material';
import { useState } from 'react';
import LoginForm from './loginForm';

function ResponsiveAppBar() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleOpenForm = () => {
    setShowLoginForm(true);
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
  };
  const theme = useTheme();

  return (
    <>
     <CssBaseline/>
     <AppBar position="fixed" className = 'full-app-navbar'>
       <Toolbar disableGutters>
         <img src={logo} alt='Logo' className='logo-image' style={theme.logoImage}/>
         <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
             <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', mr: 2} }}>
                 <Button
                     key="sigin"
                     onClick = {handleOpenForm}
                     sx={{ my: 2, color: 'white', display: 'block' }}
                 >
                  Iniciar sesión
                 </Button>
                 <Button
                      key="sigup"
                      onClick = {handleOpenForm}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                   Crear cuenta
                  </Button>
           </Box>
         </Box>
       </Toolbar>
     </AppBar>
     {showLoginForm && <LoginForm open={showLoginForm} onClose={handleCloseForm} />}
    </>
  );
}

export default ResponsiveAppBar;
