import MovieContainer from '@/components/movie/movie-container';
import { movies_end_point } from '@/constants/end-points';
import * as React from 'react';


export const convertTimeStamptzToYear = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  // const month = String(date.getMonth() + 1).padStart(2, '0');
  // const day = String(date.getDate()).padStart(2, '0');
  // ${year}-${month}-${day}
  return `${year}`;
};


export async function getServerSideProps() {
  const res = await fetch(movies_end_point);
  const parsedJson = await res.json();

  console.log(parsedJson);

  const formattedMovies = parsedJson.movies.map(movie => ({
    ...movie,
    release_date: convertTimeStamptzToYear(movie.release_date),
  }));

  return { props: { movies: formattedMovies, totalNumberOfPages: parsedJson.totalNumberOfPages } };
}


export default function Home({ movies, totalNumberOfPages }) {
  return (
    <div style={{ height: '100%', width: '100%', boxSizing: 'border-box', overflow: 'scroll' }}>
      <MovieContainer initialMovies={movies} initTotalNumberOfPages={totalNumberOfPages} />
    </div>
  );
}
