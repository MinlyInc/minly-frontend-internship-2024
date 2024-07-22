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
          <text style={{
            color: 'rgba(0, 48, 85, 1)',
            fontWeight: 900,
            fontFamily: 'Inter',
          }}>{movie.average_rating.toFixed(1)}</text>
        </div>
        <div>
          <text style={{ fontWeight: 600, fontFamily: 'Inter', color: 'rgba(26, 44, 89, 1)' }}>{movie.title}</text>
          <br />
          <text style={{ color: 'rgba(124, 124, 124, 1)' }}> {movie.release_date}</text>
        </div>
      </div>
    </div>
  );
};


export default MovieCard;