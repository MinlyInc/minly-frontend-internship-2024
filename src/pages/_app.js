import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import Footer from '@/components/footer';
import '@/styles/globals.css';
import Header from '@/components/header';

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
