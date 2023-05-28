import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme{
    logoImage?:{
      width: string;
      height: string;
    };
    landingImage?:{
      width: string;
      height: string;
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
      main: '#ea6f8c',
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
    width: '500px',
    height: '500px',
  },
};

export default createTheme(themeOptions);