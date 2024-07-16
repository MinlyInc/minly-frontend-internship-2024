import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import { Route, Router, Routes , Switch } from 'react-router-dom';
import Home from '@/pages/index';
import MovieDetails from '@/components/movie/movie-details';

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

      <Router location={'http://localhost:3001'} >
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/movie/:uuid" element={<MovieDetails/>} />
        </Routes>
      </Router>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
