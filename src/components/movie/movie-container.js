import styles from '@/styles/Movie.module.css';
import MovieCard from '@/components/movie/movie-card';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { movies_end_point } from '@/constants/end-points';
import { convertTimeStamptzToDateFormat } from '@/pages';
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
  const movies = await res.json();
  const formattedMovies = movies.map(movie => ({
    ...movie,
    release_date: convertTimeStamptzToDateFormat(movie.release_date)
  }));

  return  formattedMovies ;
}



const MovieContainer = ({initialMovies }) => {
  const [movies, setMovies] = useState([...initialMovies]) ;
  const [sortBy, setSortBy] = React.useState('none');

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

      <Stack spacing={2} >
        <Pagination className={styles.paginationBar} count={10} variant="outlined" shape="rounded" onChange={handlePageChange}   />
      </Stack>
    </>
  );
}


export default MovieContainer;