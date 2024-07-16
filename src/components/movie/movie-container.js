import styles from '@/styles/Movie.module.css';
import MovieCard from '@/components/movie/movie-card';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { movies_end_point } from '@/constants/end-points';
import {  convertTimeStamptzToYear } from '@/pages';
import SortOptionsDropDown from '@/components/drop-down/drop-down';
import * as React from 'react';

let currentPage = 1;

async function fetchPaginatedData(page , sortBy){
  const offset = ((page - 1) * 10) + 1;
  console.log(`${movies_end_point}?offset=${offset}&sortBy=${sortBy}`);
  const res = await fetch(
    `${movies_end_point}?offset=${offset}&sortBy=${sortBy}`,{
      method: 'GET',
      headers:{
        "Content-Type": "application/json",
      },
    }
  );
  const parsedJson = await res.json();
  console.log(parsedJson);
  const formattedMovies = parsedJson.movies.map(movie => ({
    ...movie,
    release_date: convertTimeStamptzToYear(movie.release_date)
  }));

  console.log(formattedMovies);

  return  formattedMovies ;
}



const MovieContainer = ({initialMovies }) => {
  const [movies, setMovies] = useState([...initialMovies]) ;
  const [sortBy, setSortBy] = useState('none');

  useEffect(() => {
      handlePageChange('' , currentPage);
  }, [sortBy]);

  const handlePageChange = async (event , page) => {
    const currentPageMovieData = await fetchPaginatedData(page , sortBy) ;
    currentPage = page;
    setMovies([...currentPageMovieData]);
  }

  return(
    <>

      <div className={styles.sortBy}>
        <h2 >All movies</h2>
        <SortOptionsDropDown setSortBy={setSortBy} sortBy={sortBy} />
      </div>

      <div className={styles.movieCardsContainer}>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={`card-item-${index}`}></MovieCard>
        ))}
      </div>

      <div className={styles.paginationBar} >
        <Pagination count={8} variant="outlined" shape="rounded" onChange={handlePageChange}   />
      </div>

    </>
  );
}


export default MovieContainer;