import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import logo from '../assets/logo.png'
import { useTheme } from '@mui/material/styles';
import { Button, CssBaseline, Typography } from '@mui/material';
import { useState } from 'react';
import LoginForm from './loginForm';
import UserInformation from '../interfaces/userInformation';
import ProfileMenu from './profileMenu';
import LandingMenu from './landingMenu';

function NavBar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [userInformation, setUserInformation] = useState<UserInformation | null>(()=>{
    const userFromLS = localStorage.getItem("userInformation");
    if (userFromLS) return JSON.parse(userFromLS) as UserInformation;
    return null;
  });
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
              {!userInformation && (
                <LandingMenu handleOpenForm={handleOpenForm} handleCloseForm={handleCloseForm}/>
                )}
                {userInformation && (
                  <>
                    <ProfileMenu userInformation={userInformation}/>
                  </>
                )}
           </Box>
         </Box>
       </Toolbar>
     </AppBar>
     {showLoginForm && <LoginForm open={showLoginForm} onClose={handleCloseForm} />}
    </>
  );
}

export default NavBar;