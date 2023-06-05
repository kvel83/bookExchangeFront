import './App.css'
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import themeOptions from './config/otherTheme';
import ResponsiveAppBar from './components/AppBar';
import LandingPage from './components/landingPage';

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline/>
      <Box sx = {{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <ResponsiveAppBar/>
          <Box sx = {{flexGrow: 1}}>
            <Container maxWidth = 'xl'>
              <LandingPage />
            </Container>
          </Box>
        </Box>
    </ThemeProvider>
  );
}

export default App
