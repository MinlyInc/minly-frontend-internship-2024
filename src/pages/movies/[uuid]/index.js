import { movie_details_end_point } from '@/constants/end-points';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/styles/Movie.module.css';
import MovieInformation from '@/components/movie/movie-information';
import CastContainer from '@/components/actor/cast-container';

const fetchMovieDetailsData = async (uuid) => {
  console.log(movie_details_end_point(uuid));
  const res = await fetch(
    `${movie_details_end_point(uuid)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return await res.json();
};

const MovieDetailsPage = () => {
  const router = useRouter();
  const { uuid } = router.query;


  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (uuid) {
      fetchMovieDetailsData(uuid).then(data => setMovieDetails(data));
    }
  }, [uuid]);

  // img for testing
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqh-F1aHLGeWstYhwN9LASD5AwGbgOE07W8Q&s"
  // video for testing
  // https://imdb-video.media-imdb.com/vi3497834521/1434659607842-pgv4ql-1523336958996.mp4?Expires=1721640398&Signature=l3JCeDrHMewRyBdRHF-Z9KwM6hsOcnlaRhrDeyCro7cuPnu84yVn9zeaeU5M3oX6UddKG2Z0LXtysD0IxKuNWWl3YKguvjNFUOscArJhDLisP3~VRSU90IcQZLU~WNNbmgWDK4jB6LPauvrjX3AxX~W1fmv~WhRCARXLdCdMdAizhnfcgUEiR1NGvkkpHLgAwz3wKR5DIDR7IjMldGJAUE6A~Yo0zXaqz2EPPmBeB-mBZAFhygEZJ3y~HpBFYF9PhmzQKNZcxwX~NeJAOgjJvju1wtVo81qok52BFLx7k4fiMP9VK9TUkT3NQSO7M4x39x2ZFEsYUvq2Wc9MySb9Vw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA
  return (
    movieDetails ?
      <div className={styles.movieDetailsContainer}>

        <div className={styles.mediaContainer}>
          <img src={movieDetails.movie.poster}
               alt="Girl in a jacket" />
          <video controls autoPlay>
            <source
              src="https://imdb-video.media-imdb.com/vi3497834521/1434659607842-pgv4ql-1523336958996.mp4?Expires=1721640398&Signature=l3JCeDrHMewRyBdRHF-Z9KwM6hsOcnlaRhrDeyCro7cuPnu84yVn9zeaeU5M3oX6UddKG2Z0LXtysD0IxKuNWWl3YKguvjNFUOscArJhDLisP3~VRSU90IcQZLU~WNNbmgWDK4jB6LPauvrjX3AxX~W1fmv~WhRCARXLdCdMdAizhnfcgUEiR1NGvkkpHLgAwz3wKR5DIDR7IjMldGJAUE6A~Yo0zXaqz2EPPmBeB-mBZAFhygEZJ3y~HpBFYF9PhmzQKNZcxwX~NeJAOgjJvju1wtVo81qok52BFLx7k4fiMP9VK9TUkT3NQSO7M4x39x2ZFEsYUvq2Wc9MySb9Vw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
              type="video/mp4" />
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
          <div className={styles.movieProperty}>
            <text style={{ fontWeight: '700' }}>Director:</text>
            &nbsp;
            <text>{movieDetails.director.name}</text>
          </div>


          <div className={styles.movieProperty}>
            <text style={{ fontWeight: '700' }}>Writer:</text>
            &nbsp;
            <text>{movieDetails.writers.map((writer, index) => (index === movieDetails.writers.length - 1 ? writer.name : writer.name + ', '))}</text>
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
  );
};


export default MovieDetailsPage;