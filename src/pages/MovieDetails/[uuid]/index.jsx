import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../../styles/Home.module.css';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import ActorsCard from '@/Component/ActorsCard/ActorsCard';
import Navbar from '@/Component/Navbar/Navbar';
import Footer from '@/Component/Footer/Footer';
import Link from 'next/link';

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
      <h6 className={`${styles.navigation}`}><Link className='text-decoration-none' href={'/'}>Home</Link> | {movie.title}</h6>
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
              <h1 className={styles.title}>
                {movie.title}{' '}
                <span className={styles.dateSpan}>
                  ({movie?.releaseDate?.split('-')[0]})
                </span>
              </h1>
            </div>
            <div>
              <div className="d-flex ms-2">
                <svg
                  className="star"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.2em"
                  viewBox="0 0 72 72"
                >
                  <path
                    fill="#fcea2b"
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  ></path>
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  ></path>
                </svg>
                <h6 className="rate">
                  {' '}
                  <span className="text-primary">
                    {' '}
                    {movie.averageRatings}
                  </span>{' '}
                  <span className={styles.grey}>reviews (420)</span>
                </h6>
              </div>
              <h6 className="text-muted ms-3">
                1h 32m <span className="fw-bolder">.</span> {movie.genre}
              </h6>
              <div className="mt-3 ms-3">
                <h5 className="fw-bolder">Overview</h5>
                <p className={`${styles.overView}`}>{movie.overview}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="ms-3">
              <h6 className="">
                {' '}
                <span className={styles.header}>Director:</span>{' '}
                {movieDirector?.firstName} {movieDirector?.lastName}
              </h6>
              <h6 className=" mt-3">
                <span className={styles.header}>Writer:</span> karim magdy
              </h6>
              <h6 className=" mt-3">
                <span className={styles.header}>Language:</span> English
              </h6>
              <h6 className={` mt-3 ${styles.cast}`}>cast</h6>
            </div>

            <div className="row">
              <ActorsCard movieActors={movieActors} />
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
