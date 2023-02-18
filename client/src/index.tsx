import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Auth from './pages/Auth';
import Welcome from './pages/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route>
            <Route path='/auth/login' element={<Auth />} />
            <Route path='/auth/signup' element={<Auth />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
