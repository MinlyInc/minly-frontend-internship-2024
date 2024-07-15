import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import { Box, Typography } from '@mui/material';


const Home = () => {
  const [movies, setMovies] = useState([
        { id: 1, title: 'Meg 2: The Trench', year: 2023, rating: 6.8, poster: '/images/meg2.jpg' },
        { id: 2, title: 'Vacation Friends 2', year: 2023, rating: 6.8, poster: '/images/vacationfriends2.jpg' },
        { id: 3, title: 'Barbie', year: 2023, rating: 7.2, poster: '/images/barbie.jpg' },
        { id: 4, title: 'Elemental', year: 2023, rating: 6.8, poster: '/images/elemental.jpg' },
        { id: 5, title: 'Ragnarok', year: 2023, rating: 7.5, poster: '/images/ragnarok.jpg' },
        { id: 6, title: 'Past Lives', year: 2023, rating: 8.8, poster: '/images/pastlives.jpg' },
        { id: 7, title: 'Oppenheimer', year: 2023, rating: 7.8, poster: '/images/oppenheimer.jpg' },
        { id: 8, title: 'The Monkey King', year: 2023, rating: 5.8, poster: '/images/monkeyking.jpg' },
        { id: 9, title: 'Meg 2: The Trench', year: 2023, rating: 6.8, poster: '/images/meg2.jpg' },
        { id: 10, title: 'Elemental', year: 2023, rating: 6.8, poster: '/images/elemental.jpg' },
        { id: 11, title: 'Ragnarok', year: 2023, rating: 7.5, poster: '/images/ragnarok.jpg' },
        { id: 12, title: 'Vacation Friends 2', year: 2023, rating: 6.8, poster: '/images/vacationfriends2.jpg' },
        { id: 13, title: 'Barbie', year: 2023, rating: 7.2, poster: '/images/barbie.jpg' },
      ]);
    
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '36px', textAlign: 'left' }}>
        All movies
       </Typography>
      <MovieList movies={movies} />
   </Box>
  );
};
      
export default Home;
