import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/movies/${id}`)
        .then((response) => response.json())
        .then((data) => setMovie(data))
        .catch((error) => console.error('Error fetching movie details:', error));
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>Rating: {movie.average_rating}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
