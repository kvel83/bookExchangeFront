import './App.css'
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import themeOptions from './config/otherTheme';
import ResponsiveAppBar from './components/AppBar';
import LandingPage from './components/landingPage';

function App() {
  return (
  <>
    <CssBaseline/>
    <ThemeProvider theme={themeOptions}>
      <Container maxWidth='xl'>
        <ResponsiveAppBar/>
        <LandingPage />
      </Container>
    </ThemeProvider>
  </>
  );
}

export default App
