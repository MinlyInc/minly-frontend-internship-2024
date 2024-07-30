import styles from '@/styles/Movie.module.css';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import { convertTimeStamptzToYear } from '@/utilities/timeStampConverter';

const MovieCard = ({ movie }) => {

  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/movies/${movie.uuid}`);
  };

  return (
    <div className={styles.movieCard} onClick={handleCardClick}>
      <div style={{ marginTop: '13px', marginRight: '13px', marginLeft: '13px' }}>
        <img
          src={movie.poster}
          alt={movie.title}
        />
      </div>
      <div className={styles.movieInformation}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <StarIcon sx={{ width: '20px', height: '20px', color: 'orange' }}></StarIcon>
          <Typography color="textPrimary" component="text" fontWeight="fontWeightExtraBold">
            {movie.average_rating.toFixed(1)}
          </Typography>
        </div>
        <div>
          <Typography component="text" fontWeight="fontWeightRegular" color="textPrimary">
            {movie.title}
          </Typography>
          <br />

          <Typography component="text" color="textSecondary">
            {convertTimeStamptzToYear(movie.release_date)}
          </Typography>
        </div>
      </div>
    </div>
  );
};


export default MovieCard;