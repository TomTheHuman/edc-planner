import { createTheme } from '@mui/material';

/**
 * Exports Mui theme configuration to be used application-wide
 */
const theme = createTheme({
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    h1: {
      fontWeight: 1000,
      fontFamily: 'Poppins, sans-serif',
    },
    button: {
      fontFamily: 'DM Sans, sans-serif',
    },
  },
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#41EAD4',
      contrastText: '#000000',
    },
    background: {
      default: '#0A0A0A',
      paper: '#1C1C1C',
    },
    text: {
      secondary: '#d0d0d0',
      disabled: '#aaaaaa',
      primary: '#ffffff',
    },
    error: {
      main: '#D7263D',
    },
    warning: {
      main: '#F46036',
    },
    success: {
      main: '#FF206E',
    },
    info: {
      main: '#FBFF12',
    },
    divider: '#ffcc48',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: 'black',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
