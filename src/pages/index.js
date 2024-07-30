import MovieContainer from '@/components/movie/movie-container';
import { MOVIES_END_POINT } from '@/constants/end-points';
import * as React from 'react';

export async function getServerSideProps() {
  const res = await fetch(MOVIES_END_POINT);
  const parsedJson = await res.json();
  return { props: { movies: parsedJson.movies, totalNumberOfPages: parsedJson.totalNumberOfPages } };
}


export default function Home({ movies, totalNumberOfPages }) {
  return (
    <div style={{ height: '100%', width: '100%', overflow: 'scroll' }}>
      <MovieContainer initialMovies={movies} initTotalNumberOfPages={totalNumberOfPages} />
    </div>
  );
}
