import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';

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
                   <Typography className={`${styles.icon}`}><StarIcon sx={{ fontSize: 18 }}/></Typography>
                   <Typography>{movie.averageRatings}</Typography>
                  </div>
                  <div className='d-flex flex-column'>

                  <Typography variant='text'>{movie.title}</Typography>
                  <Typography variant='text'>
                    {movie.releaseDate.split('-')[0]}
                  </Typography>
                  </div>
                </div>
              </div>
            </div>
          ))}
  </>
}
