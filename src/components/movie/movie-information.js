import StarIcon from '@mui/icons-material/Star';
import { convertTimeStamptzToYear } from '@/utilities/timeStampConverter';
import Typography from '@mui/material/Typography';


const MovieInformation = ({ movie, categories }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '1rem' }}>

        <Typography variant="h2">
          {movie.title}
        </Typography>


        <Typography fontWeight="fontWeightLight" color="secondary"
                    sx={{ marginLeft: '8px', fontSize: '24px' }}>
          ({convertTimeStamptzToYear(movie.release_date)})
        </Typography>

      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <StarIcon sx={{ color: 'orange' }}></StarIcon>
        <Typography fontWeight="fontWeightExtraBold" sx={{ color: 'rgba(65, 140, 251, 1)', fontSize: '1.5rem' }}>
          {movie.average_rating.toFixed(1)}
        </Typography>
      </div>

      <Typography fontWeight="fontWeightLight" color="secondary" sx={{ marginBottom: '1rem' }}>
        {categories.map(category => category.name).join(', ')}
      </Typography>


    </div>

  );


};

export default MovieInformation;