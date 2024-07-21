import axios from 'axios'
import React, { useEffect, useState } from 'react'
import'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../../styles/Home.module.css'
import { useParams } from 'next/navigation'


export default function MovieDetails() {
  const{uuid}=useParams()
const [movie, setMovies] = useState([])
    function getMovieById(){
        axios.get(`http://localhost:3001/movie/${uuid}`)
        .then((res)=>{
            console.log(res.data)
          setMovies(res.data)
        })
        .catch((err)=>{
            console.log("error",err)
        })
    }

    useEffect(()=>{
        getMovieById()
    },[])

    if (!movie) {
      return <div>Loading...</div>;
    }


    const trailerId = movie?.trailer?.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${trailerId}`;
  return <>
  <div className={styles.mainDiv} >

  <div style={{marginTop:'20px'}} className='container shadow'>
    <div className="row">
      <div className="col-3">
        <div>
          <img height={416} width={308} src={movie.poster} alt="movie" className={styles.image} />
        </div>
      </div>
      <div className="col-8 ms-5">
      <iframe
      className={styles.trailer}
          width="768"
          height="415"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Trailer"
        ></iframe>
      </div>
    </div>
<div >
    <div>
      <h1 className={styles.title}>{movie.title} <span className={styles.dateSpan}>({movie?.releaseDate?.split('-')[0]})</span></h1>
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
                    <h6 className="rate"> <span className='text-primary'> {movie.averageRatings}</span> <span className={styles.grey}>reviews (420)</span></h6>
                  </div>
                    <h6 className='text-muted ms-3'>1h 32m <span className='fw-bolder'>.</span> {movie.genre}</h6>
                    <div className='mt-3'>
                       <h5>Overview</h5>
                       <p className=''>{movie.overview}</p>
                    </div>
    </div>
    
</div>
  </div>
  </div>
  
  </>
}
