import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../../styles/Home.module.css';
import { useRouter } from 'next/router';
import Navbar from '@/Component/Navbar/Navbar';
import Footer from '@/Component/Footer/Footer';
import Link from 'next/link';
import ActorsList from '@/Component/ActorsCard/ActorsList';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';

export default function MovieDetails() {
  const router = useRouter();
  const { uuid } = router.query;
  const [movie, setMovie] = useState([]);
  const [movieActors, setMovieActor] = useState([]);
  const [movieDirector, setMovieDirector] = useState([]);
  function getMovieById() {
    if (uuid) {
      axios
        .get(`http://localhost:3001/movie/${uuid}`)
        .then((res) => {
          console.log('sss', res.data);
          setMovie(res.data);
          setMovieActor(res.data.movieActorActors);
          setMovieDirector(res.data.director);
        })
        .catch((err) => {
          console.log('error', err);
        });
    }
  }


  useEffect(() => {
    getMovieById();
  }, [uuid]);

  const trailerId = movie?.trailer?.split('v=')[1];
  const embedUrl = `https://www.youtube.com/embed/${trailerId}`;
  return (
    <>
    <Navbar/>
    <div className="container pt-4">
      <Typography variant='text' className={`${styles.navigation}`}><Link className='text-decoration-none' href={'/'}>Home</Link> | {movie.title}</Typography>
    </div>
      <div className={styles.mainDiv}>
        <div style={{ marginTop: '20px' }} className="container shadow">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="mb-3">
                <img
                  src={movie.poster}
                  alt="movie"
                  className={`${styles.image} w-100`}
                />
              </div>
            </div>
            <div className="col-12 col-md-8 ms-md-5">
              <iframe
                className={styles.trailer}
                // width="768"
                width={'100%'}
                height="415"
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Trailer"
              ></iframe>
            </div>
          </div>
          <div>
            <div>
              <Typography variant='h3' className={styles.title}>
                {movie.title}{' '}
                <Typography variant='text' className={styles.dateSpan}>
                  ({movie?.releaseDate?.split('-')[0]})
                </Typography>
              </Typography>
            </div>
            <div>
              <div className="d-flex ms-2">
              <Typography className={`${styles.icon}`}><StarIcon sx={{ fontSize: 18 }}/></Typography>
                <Typography className="d-flex">
                  {' '}
                  <Typography className="text-primary">
                    {' '}
                    {movie.averageRatings}
                  </Typography>{' '}
                  <Typography className={styles.grey}>reviews (420)</Typography>
                </Typography>
              </div>
              <Typography className="text-muted ms-3">
                1h 32m <Typography variant='text' className="fw-bolder">.</Typography> {movie.genre}
              </Typography>
              <div className="mt-3 ms-3">
                <Typography variant='h3' className="fw-bolder">Overview</Typography>
                <Typography variant='text' className={`${styles.overView}`}>{movie.overview}</Typography>
              </div>
            </div>
          </div>
          <div>
            <div className="ms-3">
              <Typography className="mt-3">
                {' '}
                <Typography variant='text' className={styles.header}>Director:</Typography>{' '}
                {movieDirector?.firstName} {movieDirector?.lastName}
              </Typography>
              <Typography className=" mt-3">
                <Typography variant='text' className={styles.header}>Writer:</Typography> karim magdy
              </Typography>
              <Typography className="mt-3 ">
                <Typography variant='text' className={styles.header}>Language:</Typography> English
              </Typography>
              <Typography className={` mt-3 ${styles.cast}`}>cast</Typography>
            </div>

            <div className="row">
              <ActorsList movieActors={movieActors} />
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
