import styles from '@/styles/Movie.module.css';
import MovieCard from '@/components/movie/movie-card';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { movies_end_point } from '@/constants/end-points';
import { convertTimeStamptzToDateFormat } from '@/pages';

async function fetchPaginatedData(page){
  const offset = (page * 10) + 1;

  const res = await fetch(
    `${movies_end_point}?offset=${offset}`,{
      method: 'GET',
      headers:{
        "Content-Type": "application/json",
      },
    }
  );

  const movies = await res.json();

  // Format the dates in the movies
  const formattedMovies = movies.map(movie => ({
    ...movie,
    release_date: convertTimeStamptzToDateFormat(movie.release_date)
  }));

  // Pass data to the page via props
  return  formattedMovies ;
}



const MovieContainer = ({initialMovies}) => {

  const [movies, setMovies] = useState([...initialMovies]) ;


  const handlePageChange = async (event , page) => {
    const currentPageMovieData = await fetchPaginatedData(page) ;
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