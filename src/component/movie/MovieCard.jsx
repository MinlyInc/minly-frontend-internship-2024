import styles from './MovieCard.module.css';
import axios from'axios'
import React, { useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';

const MovieReleaseYear = ( releaseDate ) => {
  const year = new Date(releaseDate).getFullYear();
  return year;
};

const MovieCard = ({ movie }) => {



  return (
    <div className={styles.movieCard}>
      <img src={movie.poster} alt={movie.title} />
      <div className={styles.movieInfo}>
        <h3 style={{fontWeight:900}} className="movieInfo-h3">{movie.title} </h3>
        <p className="movieInfo-p">{MovieReleaseYear(movie.releaseDate)}</p>
        <p>Rating: {movie.averageRating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
