import styles from '@/styles/Movie.module.css';
import MovieCard from '@/components/movie/movie-card';
import Pagination from '@mui/material/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { MOVIES_END_POINT } from '@/constants/end-points';
import SortOptionsDropDown from '@/components/drop-down/drop-down';
import * as React from 'react';
import Typography from '@mui/material/Typography';

let currentPage = 1;

async function fetchPaginatedData(page, sortBy) {
  const offset = ((page - 1) * 10) + 1;
  const res = await fetch(
    `${MOVIES_END_POINT}?offset=${offset}&sortBy=${sortBy}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const parsedJson = await res.json();


  return { movies: parsedJson.movies, totalNumberOfPages: parsedJson.totalNumberOfPages - 1 };
}

const MovieContainer = ({ initialMovies, initTotalNumberOfPages }) => {
  const [movies, setMovies] = useState([...initialMovies]);
  const [sortBy, setSortBy] = useState('none');
  const [totalNumberOfPagesForPagination, setTotalNumberOfPagesForPagination] = useState(initTotalNumberOfPages - 1);


  const handlePageChange = useCallback(async (event, page) => {
    let { movies, totalNumberOfPages } = await fetchPaginatedData(page, sortBy);
    currentPage = page;
    setTotalNumberOfPagesForPagination(totalNumberOfPages);
    setMovies([...movies]);
  });


  useEffect(() => {
    handlePageChange('', currentPage).then();
  }, [sortBy]);

  return (
    <>

      <div className={styles.sortBy}>
        <Typography variant="h2" color="primary">
          All movies
        </Typography>
        <SortOptionsDropDown setSortBy={setSortBy} sortBy={sortBy} />
      </div>

      {movies && movies.length > 0 &&
        <div className={styles.movieCardsContainer}>
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={`card-item-${index}`}></MovieCard>
          ))}
        </div>}

      <div className={styles.paginationBar}>
        <Pagination count={totalNumberOfPagesForPagination} variant="outlined" shape="rounded"
                    onChange={handlePageChange} />
      </div>

    </>
  );
};

export default MovieContainer;