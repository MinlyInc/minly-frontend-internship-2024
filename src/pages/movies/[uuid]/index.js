import { MOVIE_DETAILS_END_POINT } from '@/constants/end-points';
import styles from '@/styles/Movie.module.css';
import MovieInformation from '@/components/movie/movie-information';
import CastContainer from '@/components/actor/cast-container';
import Typography from '@mui/material/Typography';


export async function getServerSideProps(context) {
  const { uuid } = context.params;

  const res = await fetch(
    `${MOVIE_DETAILS_END_POINT(uuid)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await res.json();
  return { props: { movieDetails: data } };
}


const MovieDetailsPage = ({ movieDetails }) => {

  if (!movieDetails) {
    return (<> </>);
  }

  return (
    <div className={styles.movieDetailsContainer}>

      <div className={styles.mediaContainer}>
        <img src={movieDetails.movie.poster}
             alt={movieDetails.movie.title} />
        <video controls autoPlay>
          <source
            src={movieDetails.movie.trailer}
            type="video/mp4" />
        </video>
      </div>

      <MovieInformation movie={movieDetails.movie} categories={movieDetails.categories} />

      <div>
        <Typography variant="h3">
          Overview
        </Typography>

        <Typography sx={{ marginBottom: '6px' }} fontWeight="fontWeightLight">
          {movieDetails.movie.overview}
        </Typography>

        <br />
        <div className={styles.movieProperty}>
          <Typography component="text" fontWeight="fontWeightRegular">
            Director:
          </Typography>
          &nbsp;
          <Typography component="text" fontWeight="fontWeightLight">
            {movieDetails.director.name}
          </Typography>
        </div>


        <div className={styles.movieProperty}>
          <Typography component="text" fontWeight="fontWeightRegular">
            Writer:
          </Typography>

          &nbsp;

          <Typography component="p" fontWeight="fontWeightLight">
            {movieDetails.writers.map((writer, index) => (index === movieDetails.writers.length - 1 ? writer.name : writer.name + ', '))}
          </Typography>

        </div>


        <div className={styles.movieProperty}>
          <Typography component="text" fontWeight="fontWeightRegular">
            Language:
          </Typography>
          &nbsp;
          <Typography component="text" fontWeight="fontWeightLight">
            {movieDetails.language.name}
          </Typography>
        </div>

      </div>
      <br />

      <CastContainer actors={movieDetails.actors}></CastContainer>
    </div>
  );
};


export default MovieDetailsPage;