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

  return { movies : formattedMovies , totalNumberOfPages : parsedJson.totalNumberOfPages - 1 } ;
}

const MovieContainer = ({initialMovies , initTotalNumberOfPages }) => {
  const [movies, setMovies] = useState([...initialMovies]) ;
  const [sortBy, setSortBy] = useState('none');
  const [totalNumberOfPagesForPagination , setTotalNumberOfPagesForPagination] = useState(initTotalNumberOfPages - 1);


  console.log('re-rendered again')

  useEffect( () => {
      handlePageChange('' , currentPage);
  }, [sortBy]);


  const handlePageChange = async (event , page) => {
    let { movies , totalNumberOfPages } = await fetchPaginatedData(page , sortBy) ;
    currentPage = page;
    setTotalNumberOfPagesForPagination(totalNumberOfPages);
    setMovies([...movies]);
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
        <Pagination count={totalNumberOfPagesForPagination} variant="outlined" shape="rounded" onChange={handlePageChange}   />
      </div>

    </>
  );
}

export default MovieContainer;