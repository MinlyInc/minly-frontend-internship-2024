
import MovieCard from './MovieCard';
import './MovieCard.module.css';
import axios from'axios'
import React, { useEffect, useState } from 'react';


const MovieList = ({ }) => {
  const[
    movies,setmovies
  ]=useState (null)
  function getAllMovies(){
    axios.get(`http://localhost:3001/movies`)
    .then((res)=>{
  console.log(res.data);
      setmovies(res.data)
    })

    .catch((err)=>{
  console.log('err',err);
    })
  }

  useEffect(()=>{
    getAllMovies()
  },[])
  return (
      (movies ?     <div className="movieist">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div> : <></>)
  );
};

export default MovieList;
