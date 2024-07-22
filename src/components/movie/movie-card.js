import styles from '@/styles/Movie.module.css';
import StarIcon from '@mui/icons-material/Star';

const MovieCard = ({ movie }) => {

  const handleCardClick = () => {
    window.location.href = `/movies/${movie.uuid}`;
  };

  return (
    <div className={styles.movieCard} onClick={handleCardClick}>
      <div style={{ marginTop: '13px', marginRight: '13px', marginLeft: '13px' }}>
        <img
          src={movie.poster}
          alt="no image"
        />
      </div>
      <div className={styles.movieInformation}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <StarIcon sx={{ width: '20px', height: '20px', color: 'orange' }}></StarIcon>
          {movie.average_rating.toFixed(1)}
        </div>
        <div>
          {movie.title}
          <br />
          {movie.release_date}
        </div>
      </div>
    </div>
  );
};


export default MovieCard;