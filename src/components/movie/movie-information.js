import StarIcon from '@mui/icons-material/Star';
import { convertTimeStamptzToYear } from '@/pages';
import styles from '@/styles/Movie.module.css';


const MovieInformation = ({ movie , categories}) => {
  return(
    <div style={{display: 'flex', flexDirection: 'column'}}>

      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <h2>{movie.title}</h2>
        <text style={{color: 'gray' , fontSize: '24px' , marginLeft: '8px' , fontWeight: '400'}}> ({convertTimeStamptzToYear(movie.release_date)})</text>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <StarIcon sx={{  color: 'orange' }}></StarIcon>
        <text style={{color: '#418CFB' , fontWeight: '900' , fontSize: '18px'}}>{movie.average_rating.toFixed(1)}</text>
      </div>

      <text style={{color: 'gray' , fontSize: '16px' , marginLeft: '8px' , fontWeight: '400'}}>{categories.map((category, index) => ( index === categories.length - 1  ? category.name : category.name + ', '  ) )}</text>

    </div>

  );


}

export default MovieInformation;