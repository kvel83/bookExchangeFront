import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CssBaseline, ThemeProvider } from '@mui/material'
import themeOptions from './config/otherTheme'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline/>
      <ThemeProvider theme = {themeOptions}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
)
