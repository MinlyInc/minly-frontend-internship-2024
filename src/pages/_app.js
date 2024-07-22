import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 

export default function MyApp({ Component, pageProps }) {
  const router = useRouter(); 

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    const handleRouteChange = (url) => {
      NProgress.start();
    };

    const handleRouteComplete = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('routeChangeError', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('routeChangeError', handleRouteComplete);
    };
  }, [router]);

  return (
    <div style={{ backgroundColor: '#ededed', minHeight: '100vh' }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
    </div>
  );
}