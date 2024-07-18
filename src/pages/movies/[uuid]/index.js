import { movie_details_end_point } from '@/constants/end-points';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/styles/Movie.module.css';
import MovieInformation from '@/components/movie/movie-information';
import CastContainer from '@/components/cast/cast-container';

const fetchMovieDetailsData = async (uuid) => {
  console.log(movie_details_end_point(uuid))
  const res = await fetch(
    `${movie_details_end_point(uuid)}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await res.json();
}

const MovieDetailsPage = () => {
  const router = useRouter();
  const { uuid } = router.query;


  const [movieDetails, setMovieDetails] = useState(null);

  useEffect( () => {
    if(uuid){
        fetchMovieDetailsData(uuid).then(data => setMovieDetails(data));
    }
  }, [uuid]);

  return (
    movieDetails ?
      <div className={styles.movieDetailsContainer}>

        <div className={styles.mediaContainer}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqh-F1aHLGeWstYhwN9LASD5AwGbgOE07W8Q&s"
               alt="Girl in a jacket" />
          <video controls autoPlay >
            <source src="https://imdb-video.media-imdb.com/vi2821244441/1434659607842-pgv4ql-1720050843612.mp4?Expires=1721382606&Signature=M2QWBXAuupnG-cy5NmwEnI3OnXC83iYtmeQ7hdDUpHIVg7T4CPusPnd54flrhMJ8YfaqFfE2q4VfIwojL55pPWIWP8XcoZNwO69m2h3gNZXLQL-X2TbNQAqAHHdyaKMqoYRGnOvfWNCE4ZRDJrveCXRePoTuyiRaQA-gcd8Gc2NiQkENQZna4iigwAdpv3jYWtf-0PlesuMxuZRi4zRaMr5r3EpHNngzdHjsTfkOftbseAsfzf9zrlC0nJ9oyFJf5MRY2DMRixEFkSu43Y0kXu-4Q1QmFL7qHKx4rE42fFVzgNhCVnS~B3eCCwYXNdJ9hxs0PGZuZzbS6OFVJ7IjCw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" type="video/mp4" />
          </video>
        </div>

        <div>
          <MovieInformation movie={movieDetails.movie} categories={movieDetails.categories} />
        </div>

        <div>
          <h3>Overview</h3>
          <p>
            {movieDetails.movie.overview}
          </p>
          <br />
          <div  className={styles.movieProperty}>
            <text style={{ fontWeight: '700' }}>Director:</text>
            &nbsp;
            <text>{movieDetails.director.name}</text>
          </div>


          <div  className={styles.movieProperty}>
            <text style={{ fontWeight: '700' }}>Writer:</text>
            &nbsp;
            <text>{movieDetails.writers.map((writer, index) => ( index === movieDetails.writers.length - 1  ? writer.name : writer.name + ', '  ) )}</text>
          </div>


          <div className={styles.movieProperty}>
            <text style={{ fontWeight: '700' }}>Language:</text>
            &nbsp;
            <text>{movieDetails.language.name}</text>
          </div>
        </div>

        <br />

        <div>
          <h3>Cast</h3>
          <CastContainer actors={movieDetails.actors}></CastContainer>
        </div>

      </div> : <></>
  )
}


export default MovieDetailsPage;