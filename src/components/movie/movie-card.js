import styles from '@/styles/Movie.module.css';
import StarIcon from '@mui/icons-material/Star';


const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movieCard}>

      <div style={{marginTop: '13px' , marginRight: '13px' , marginLeft: '13px'}} >
        <img
          src={movie.poster}
          alt="no image"
        />
      </div>

      <div className={styles.movieText}>
        <StarIcon sx={{ width: '20px', height: '20px', color: 'orange' }}></StarIcon>
        {movie.average_rate}
        <br />
        {movie.title}
        <br />
        {movie.released_year}
      </div>
    </div>
  );
}


export default MovieCard;