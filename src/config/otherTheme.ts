import { TextFieldProps } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme{
    logoImage?: {
      width: string;
      height: string;
    };
    landingImage?:{
      width: string;
      height: string;
    };
    kidsReading?:{
      width: string;
      height: string;
    };
    appImages?:{
      width: string;
      height: string;
    };
    cards?:{
      width: string;
      height: string;
    };
    textField?: {
      input?: TextFieldProps['inputProps'];
    };
  }
  interface ThemeOptions{
    logoImage?: {
      width: string;
      height: string;
    };
    landingImage?:{
      width: string;
      height: string;
    };
    kidsReading?:{
      width: string;
      height: string;
    };
    appImages?:{
      width: string;
      height: string;
    };
    cards?:{
      width: string;
      height: string;
    };
    textField?: {
      input?: TextFieldProps['inputProps'];
    };
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(63,15,121,0.76)',
      contrastText: '#FFEAD2',
    },
    secondary: {
      main: '#5a7cda',
    },
    background: {
      default: '#8294C4',
      paper: '#ACB1D6',
    },
    text: {
      primary: '#fbfaf9',
    },
    error: {
      main: '#7e2e41',
    },
    warning: {
      main: '#e6c865',
    },
    info: {
      main: '#b97ce8',
    },
    success: {
      main: '#8ff1f1',
    },
    divider: 'rgba(70,51,51,0.21)',
  },
  logoImage: {
    width: '120px',
    height: '120px'
  },
  landingImage:{
    width: '40rem',
    height: '40rem',
  },
  kidsReading:{
    width: '30rem',
    height: '30rem',
  },
  textField: {
    input: {
      inputMode: 'numeric',
      // style: { 'app': 'textfield' },
    },
  }
};

export default createTheme(themeOptions);