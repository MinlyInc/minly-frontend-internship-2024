import MovieContainer from '@/components/movie/movie-container';
import { movies_end_point } from '@/constants/end-points';
import * as React from 'react';
import SortOptionsDropDown from '@/components/drop-down/drop-down';


export const convertTimeStamptzToYear = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  // const month = String(date.getMonth() + 1).padStart(2, '0');
  // const day = String(date.getDate()).padStart(2, '0');
  // ${year}-${month}-${day}
  return `${year}`;
};


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(movies_end_point);
  const parsedJson = await res.json();

  console.log(parsedJson);
  // Format the dates in the movies
  const formattedMovies = parsedJson.movies.map(movie => ({
    ...movie,
    release_date: convertTimeStamptzToYear(movie.release_date)
  }));

  // Pass data to the page via props
  return { props: { movies: formattedMovies } };
}


export default function Home({movies}) {
  return (
    <div>
        <MovieContainer initialMovies={movies} />
    </div>
  );
}
