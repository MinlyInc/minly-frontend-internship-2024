import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'
import StarIcon from '@mui/icons-material/Star';

export default function MovieList({movies}) {
  return <>
  
  {movies.map((movie) => (
            <div key={movie.id} className="col-5 col-md-3 mt-4">
              <div className={`card shadow border-white`}>
                  <Link href={`/MovieDetails/${movie.uuid}`}>
                <div className="card-img">
                  <img
                    height={300}
                    className={` ${styles.movieImage}`}
                    src={movie.poster}
                    alt=""
                  />
                </div>
                  </Link>
                <div className="card-body">
                  <div className="d-flex">
                    <h6 className={`${styles.icon}`}><StarIcon sx={{ fontSize: 18 }}/></h6>
                    <h6 className="rate">{movie.averageRatings}</h6>
                  </div>
                  <h6 className="fw-bold">{movie.title}</h6>
                  <h6 className="text-muted">
                    {movie.releaseDate.split('-')[0]}
                  </h6>
                </div>
              </div>
            </div>
          ))}
  </>
}
