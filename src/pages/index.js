import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [loading, setLoading] = useState(true); 
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchMovies();
  }, [filter, page, searchQuery]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setPage(1);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setPage(1);
  };

  const fetchMovies = () => {
    setLoading(true);
    let url = `http://localhost:3001/movie?filter=${filter}&page=${page}&limit=8`;
    if (searchQuery) {
      url += `&query=${encodeURIComponent(searchQuery)}`;
    }

    fetch(url)
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
   <div>
   <Header handleSearch={handleSearch} />
    <Box sx={{  padding: '0 160px', mt: 15 }}>
      <Typography variant="h4" component="h1"  sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '36px', textAlign: 'left' }}>
        All movies
       </Typography>
      
      <Box sx={{ textAlign: 'right', minWidth: 120 }}>
       <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="sort-select-label">Sort by</InputLabel>
        <Select
            labelId="sort-select-label"
            id="sort-select"
            value={filter}
            onChange={handleFilterChange}
            sx={{
              backgroundColor: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'gray',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
              },
              '& .MuiSvgIcon-root': {
                color: 'black',
              },
            }}
          >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>
    </Box>

      <MovieList movies={movies} page={page} setPage={setPage} totalMovies={totalMovies} />
    </Box>
    <Footer />
   </div>

  );
};
      
export default Home;
