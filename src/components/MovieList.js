import React, { useState, useEffect } from 'react';
import { Grid, Pagination } from '@mui/material';
import Movie from './Movie';

const MovieList = ({ movies, page, setPage, totalMovies, loading }) => {
  const moviesPerPage = 8; 

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  if (movies.length === 0) {
    return <div>loading...</div>; 
  }

  if (!Array.isArray(movies) || movies.length === 0) {
    return <div>No movies found.</div>;
  }
  
  return (
    <div>
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Movie movie={movie} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(totalMovies  / moviesPerPage)}
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
