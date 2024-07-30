import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800,
    fontWeightExtraBold: 900,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 400,
      fontFamily: 'Inter',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      fontFamily: 'Inter',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
      fontFamily: 'Inter',
      marginBottom: '1rem',
    },

  },
  palette: {
    primary: {
      main: 'rgba(0, 48, 85, 1)',
    },
    secondary: {
      main: 'rgba(105, 117, 134, 1)',
    },
    text: {
      fontWeight: 600,
      primary: 'rgba(0, 48, 85, 1)',
      secondary: 'rgba(105, 117, 134, 1)',
    },
    background: {
      default: '#f0f0f0',
    },
  },
});

export default theme;
