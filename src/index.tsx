import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/nunito-sans';
import '@fontsource/source-serif-pro';
import { theme } from './utils/theme';
import App from './App';
import { ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
