import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
