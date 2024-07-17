import StarIcon from '@mui/icons-material/Star';
import { convertTimeStamptzToYear } from '@/pages';


const MovieInformation = ({ movie , categories}) => {
  return(
    <div style={{display: 'flex', flexDirection: 'column'}}>

      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <h2>{movie.title}</h2>
        <text style={{color: 'gray' , fontSize: '24px' , marginLeft: '8px' , fontWeight: '400'}}> ({convertTimeStamptzToYear(movie.release_date)})</text>
      </div>


      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <StarIcon sx={{ width: '20px', height: '20px', color: 'orange' }}></StarIcon>
        <text style={{color: '#418CFB'}}>{movie.average_rating}</text>
      </div>


      <p style={{}}>{categories.map((category, index) => ( index === categories.length - 1  ? category.name : category.name + ', '  ) )}</p>


    </div>

  );


}

export default MovieInformation;