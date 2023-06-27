import { Button, CssBaseline } from '@mui/material';

interface LandingMenuProps {
  handleOpenForm: () => void;
  handleCloseForm: () => void;
  handleOpenRegistrationForm: () => void;
  handleCloseRegistrationForm: () => void;
}

function LandingMenu({handleOpenForm, handleOpenRegistrationForm}: LandingMenuProps) {
  return (
    <>
      <CssBaseline/>
        <Button
            key="sigin"
            onClick = {handleOpenForm}
            sx={{ my: 2, color: 'white', display: 'block' }}
        >
          Iniciar sesión
        </Button>
        <Button
            key="sigup"
            onClick = {handleOpenRegistrationForm}
            sx={{ my: 2, color: 'white', display: 'block' }}
        >
          Crear cuenta
        </Button>
      </>
  )
}


export default LandingMenu;
