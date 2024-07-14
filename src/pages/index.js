import MovieCard from '@/components/movie/movie-card';
import styles from '@/styles/Movie.module.css';


const movies = [

  {id: 1 , poster : '/test.png' , title: 'Meg 2' , average_rate: 8 ,released_year: 2023},
  {id: 1 , poster : '/test.png' , title: 'Meg 2' , average_rate: 8,released_year: 2023},
  {id: 1 , poster : '/test.png' , title: 'Meg 2' , average_rate: 8,released_year: 2023},
  {id: 1 , poster : '/test.png' , title: 'Meg 2' , average_rate: 8,released_year: 2023},
  {id: 1 , poster : '/test.png' , title: 'Meg 2' , average_rate: 8,released_year: 2023},
  {id: 1 , poster : '/test.png' , title: 'Meg 2' , average_rate: 8,released_year: 2023},
  {id: 1 , poster : '/test.png' , title: 'Meg 2' , average_rate: 8,released_year: 2023},


]



export default function Home() {
  return (
    <>
      <h2>all movies</h2>


      <div className={styles.movieCardContainer}>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={`card-item-${index}`}></MovieCard>
        ))}
      </div>

    </>
  );
}
