import styles from '@/styles/Movie.module.css';
import MovieCard from '@/components/movie/movie-card';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useRef, useState } from 'react';
import { movies_end_point } from '@/constants/end-points';
import { convertTimeStamptzToDateFormat } from '@/pages';

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



const MovieContainer = ({initialMovies , sortBy}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [movies, setMovies] = useState([...initialMovies]) ;


  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      handlePageChange('' , currentPage);
    }
  }, [sortBy]);


  const handlePageChange = async (event , page) => {
    const currentPageMovieData = await fetchPaginatedData(page , sortBy) ;
    currentPage = page;
    setMovies([...currentPageMovieData]);
  }

  return(
    <>
      <h2 style={{ marginLeft: '8%', marginTop: '8%' }}>All movies</h2>
      <div className={styles.movieCardContainer}>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={`card-item-${index}`}></MovieCard>
        ))}
      </div>

      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" onChange={handlePageChange}  />
      </Stack>
    </>
  );
}


export default MovieContainer;