import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import styles from './MovieList.module.css';
import { Box } from '@mui/material';
import Pagination from './Pagination';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3001/movies?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.data);
        setLastPage(data.lastPage);
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }, [page]);

  return (
    <Box>
      <Box className={styles.movieList}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
      <Pagination page={page} lastPage={lastPage} setPage={setPage} />
    </Box>
  );
};

export default MovieList;
