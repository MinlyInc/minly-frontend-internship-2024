import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetchMovies();
  }, [filter, page]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/movie?page=${page}`)
  //     .then(response => response.json())
  //     .then(data => setMovies(data))
  //     .catch(error => console.error('Error fetching movies:', error));
  // }, [page]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setPage(1);
  };

  const fetchMovies = () => {
    setLoading(true);
    fetch(`http://localhost:3001/movie?filter=${filter}&page=${page}&limit=8`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.data || []);
        setTotalMovies(data.total || 0);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
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

      <MovieList movies={movies} page={page} setPage={setPage} totalMovies={totalMovies} />
      
   </Box>
  );
};
      
export default Home;
