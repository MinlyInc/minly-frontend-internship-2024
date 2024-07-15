import MovieContainer from '@/components/movie/movie-container';
import { movies_end_point } from '@/constants/end-points';




export const convertTimeStamptzToDateFormat = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(movies_end_point);
  const movies = await res.json();

  // Format the dates in the movies
  const formattedMovies = movies.map(movie => ({
    ...movie,
    release_date: convertTimeStamptzToDateFormat(movie.release_date)
  }));

  // Pass data to the page via props
  return { props: { movies: formattedMovies } };
}


export default function Home({movies}) {
  return (
    <div>
        <MovieContainer initialMovies={movies}/>
    </div>
  );
}
