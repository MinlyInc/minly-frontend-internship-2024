import MovieList from '../components/MovieList';
import styles from './index.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.index}>
        <h1 className={styles.title}>All Movies</h1>
        <MovieList />
      </div>
    </>
  );
}
