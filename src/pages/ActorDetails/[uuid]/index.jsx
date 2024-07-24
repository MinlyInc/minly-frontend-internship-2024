import axios from 'axios';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { act, useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.css'

export default function ActorDetails() {
  const router = useRouter();
  const { uuid } = router.query;
  const [actor, setActor] = useState([])
  const [movieActor, setMovieActor] = useState([])

  function getActorById() {
    console.log('hello');
    if(uuid){
      axios
        .get(`http://localhost:3001/actor/${uuid}`)
        .then((res) => {
          console.log('asssa', res.data);
          setActor(res.data)
          setMovieActor(res.data.movieActorActors)
        })
        .catch((err) => {
          console.log('err actor', err);
        });
    }
  }

  useEffect(() => {
    getActorById();
  }, [uuid]);
  return <>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
       <div>
       <img src={actor.picture} className={`${styles.actorImage}`} alt="..."></img> 
       </div>

       <div className='info'>
<h3 className={`${styles.personalInfo}`}>personal information</h3>
<h6 className='fw-bolder mt-2'>Known for</h6>
<h6>Acting</h6>
<h6 className='fw-bolder'>Gender</h6>
<h6>{actor.firstName} {actor.lastName}</h6>
<h6 className='fw-bolder'>Birthdate</h6>
<h6>{actor.birthDate}</h6>
       </div>
      </div>

      <div className="col-md-8">
        <div className='info'>
          <h2 className='fw-bolder'>{actor.firstName} {actor.lastName}</h2>
          <div className="d-flex">
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
                    9.2
                  </span>{' '}
                  <span className={styles.grey}>reviews (420)</span>
                </h6>
              </div>
              <h4 className={`${styles.darkBlue} fw-bolder`}>Biography</h4>
              <p className={`${styles.darkBlue} mt-2`}>{actor.bio}</p>
              <h4 className={`${styles.darkBlue} fw-bolder`}>Acting</h4>
              <ul>
                {movieActor.map((actor)=>{
                  return <li className={`${styles.role} py-2`}>{actor.movie.title}<span className='text-muted'> as</span>  {actor.character}</li>
                })}
              </ul>
        </div>
      </div>
    </div>
  </div>
  </>;
}
