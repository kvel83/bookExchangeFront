import { CssBaseline, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import name from '../assets/nombre.png';


const LandingPage = () => {
  const theme = useTheme();

  return (
    <div>
    <CssBaseline/>
      <Container maxWidth="sm">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <img
              src={name}
              alt="Landing Page Image"
              className = 'landing-image'
              style={theme.landingImage}
            />
          </Grid>
          <Grid item xs = {6}>
            <img
                src=''
                alt='kids Reading'
                className='kids-reading'
                style={{width: '100%'}}
            />
          </Grid>
          <Grid item xs={12} sx = {{ display: 'flex', justifyContent: 'center', mt: 2}}>
            <Button
              variant="contained"
              color="primary"
            >
                Iniciar sesión
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx = {{ml: 2}}
            >
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
