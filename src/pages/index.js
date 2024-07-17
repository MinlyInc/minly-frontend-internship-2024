import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchMovies();
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const fetchMovies = () => {
    fetch(`http://localhost:3001/movie?filter=${filter}`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '36px', textAlign: 'left' }}>
        All movies
       </Typography>
      
      <Box sx={{ textAlign: 'right', minWidth: 120 }}>
       <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="filter-select-label">Filter by</InputLabel>
        <Select
          labelId="filter-select-label"
          id="filter-select"
          value={filter}
          onChange={handleFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>
    </Box>

      <MovieList movies={movies} />
      
   </Box>
  );
};
      
export default Home;
