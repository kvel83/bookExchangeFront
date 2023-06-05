import './App.css'
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import themeOptions from './config/otherTheme';
import ResponsiveAppBar from './components/AppBar';
import LandingPage from './components/landingPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Dashboard from './pages/Dashboard';
import { AppContext, AppProvider } from './context/AppContext';

function App() {

  const {isLoggedIn} = useContext(AppContext);

  return (
  <>
    <AppProvider>
    <ThemeProvider theme={themeOptions}>
      <CssBaseline/>
      <BrowserRouter>
      <Box sx = {{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <ResponsiveAppBar/>
          <Box sx = {{flexGrow: 1}}>
            <Container maxWidth = 'xl'>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path='/dashboard' element={isLoggedIn? <Dashboard />:<Navigate to='/' />} />
              </Routes>
            </Container>
          </Box>
        </Box>
        </BrowserRouter>
    </ThemeProvider>
    </AppProvider>
  </>
  );
}

export default App;
