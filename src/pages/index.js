import React from 'react';
import MovieList from '@/component/movie/MovieList';
import MovieCard from '@/component/movie/MovieCard';
const movies = [
  {
    id: 1,
    title: 'Meg 2: The Trench',
    year: 2023,
    rating: 6.8,
    posterUrl: 'https://ih1.redbubble.net/image.4801417980.2329/st,small,845x845-pad,1000x1000,f8f8f8.u1.jpg',
  },
  {
    id: 2,
    title: 'Vacation Friends 2',
    year: 2023,
    rating: 6.8,
    posterUrl: 'path/to/vacationfriends2.jpg',
  },
  // Add more movie objects here
];

const HomePage = () => {
  return (
    <div>
      <h1>All Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
