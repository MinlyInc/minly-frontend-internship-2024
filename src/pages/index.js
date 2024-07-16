import { Typography, Box } from '@mui/material';
import MovieList from '../components/MovieList';
import NavBar from '../components/NavBar';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <Box className={styles.index}>
        <MovieList />
      </Box>
    </>
  );
}
