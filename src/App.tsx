import './App.css'
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import themeOptions from './config/otherTheme';
import NavBar from './components/NavBar';
import LandingPage from './components/landingPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/pageNotFound';



function App() {
  return (
  <>
    <ThemeProvider theme={themeOptions}>
      <CssBaseline/>
      <BrowserRouter>
        <Grid container direction="column" style={{ minHeight: '100vh' }}>
        <NavBar />
          <Grid item style={{flex: 1}}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path='/dashboard' element={(localStorage.getItem("userInformation"))? <Dashboard />:<Navigate to='/' />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  </>
  );
}

export default App;
