import { Button, CssBaseline } from '@mui/material';

interface LandingMenuProps {
  handleOpenForm: () => void;
  handleCloseForm: () => void;
}

function LandingMenu({handleOpenForm}: LandingMenuProps) {
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
            onClick = {handleOpenForm}
            sx={{ my: 2, color: 'white', display: 'block' }}
        >
          Crear cuenta
        </Button>
      </>
  )
}


export default LandingMenu;
