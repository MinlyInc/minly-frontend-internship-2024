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
          <video autoPlay>
            <source src="blob:https://www.youtube.com/b276864f-c320-46b1-96f0-9de63f8862e3" type="video/mp4" />
          </video>
        </div>

        <div>
          <MovieInformation movie={movieDetails.movie} categories={movieDetails.categories} />
        </div>

        <div>
          <h3>Overview</h3>
          <br/>
          <div style={{ display: 'flex', flexDirection: 'row' , paddingBottom: '1rem' , alignItems: 'center' }}>
            <text style={{ fontWeight: '700' }}>Director:</text>
            &nbsp;
            <text>{movieDetails.director.name}</text>
          </div>


          <div style={{ display: 'flex', flexDirection: 'row' ,alignItems: 'center' }}>
            <text style={{ fontWeight: '700' }}>Language:</text>
            &nbsp;
            {/*<text>{movieDetails.language.name}</text>*/}
          </div>
        </div>

        <br/>

        <div>
          <h3>Cast</h3>
          <CastContainer actors={movieDetails.actors}></CastContainer>
        </div>

      </div> : <></>
  )
}


export default MovieDetailsPage;