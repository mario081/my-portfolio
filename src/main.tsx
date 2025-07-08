import {CssBaseline, ThemeProvider} from '@mui/material';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import theme from './theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
     <CssBaseline />
    <App />
    </ThemeProvider>
  </StrictMode>,
)
