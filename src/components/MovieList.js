import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import styles from './MovieList.module.css';
import { Box } from '@mui/material';

const MovieList = () => {
  //const [movies, setMovies] = useState([]);

  const sampleMovies = [
    {
      id: 1,
      title: 'Meg 2: The Trench',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5jA-9abymMK_Luki0gDFuNN_3ER3l-yRzA&s',
      rating: 6.8,
      year: 2023,
    },
    {
      id: 2,
      title: 'Barbie',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGZ1kboHlgueJU5SaB7BSD2oWCfE2HVSlvg&s',
      rating: 7.2,
      year: 2023,
    },
  ];

  return (
    <Box className={styles.movieList}>
      {sampleMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Box>
  );
};

export default MovieList;
