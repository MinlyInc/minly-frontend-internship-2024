import React from 'react';
import MovieList from '@/component/movie/MovieList';
import MovieCard from '@/component/movie/MovieCard';


const HomePage = () => {
  return (
    <div style={{marginTop:'15px'}}>
      <h1 style={{fontFamily:"Inter", fontSize: "24px",lineHeight:"36px",fontWeight:600}}>All Movies </h1>
      <MovieList />
    </div>
  );
};

export default HomePage;
