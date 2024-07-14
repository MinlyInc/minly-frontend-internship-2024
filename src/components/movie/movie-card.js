import Image from 'next/image' ;
import styles from '@/styles/Movie.module.css';

import StarIcon from '@mui/icons-material/Star';


const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movieCard}>

      <div className={styles.moviePoster}>
        <Image src={movie.poster} height={300} width={250} alt={'no image'} ></Image>
      </div>

      <div className={styles.movieText}>
        <StarIcon sx={{width:'20px' , height: '20px' , color: 'orange' }}></StarIcon>
        {movie.average_rate}
        <br />
        {movie.title}
        <br  />
        {movie.released_year}

      </div>
    </div>
  ) ;
}


export default MovieCard;