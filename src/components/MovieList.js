import React, { useState, useEffect } from 'react';
import { Grid, Pagination } from '@mui/material';
import Movie from './Movie';

const MovieList = ({ movies, setMovies }) => {
  const [page, setPage] = useState(1);
  const moviesPerPage = 8; 
  
  useEffect(() => {
    fetch('http://localhost:3001/movie')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * moviesPerPage;
  const visibleMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  if (movies.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <Grid container spacing={4}>
        {visibleMovies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Movie movie={movie} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(movies.length / moviesPerPage)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </div>
  );
};

export default MovieList;
