import axios from 'axios';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';
import Reward from '@/Component/Reward/Reward';
import Navbar from '@/Component/Navbar/Navbar';
import Footer from '@/Component/Footer/Footer';
import StarIcon from '@mui/icons-material/Star';
import{getActorById,getRewards}from '../../../utils/ApiFile'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Typography } from '@mui/material';


export default function ActorDetails() {
  
  const router = useRouter();
  const { uuid } = router.query;
  const [movieActor, setMovieActor] = useState([]);
  const [reward, setReward] = useState([]);
  const [actor, setActor] = useState([]);

  useEffect(() => {
    getActorById(uuid,setActor,setMovieActor);
    getRewards(uuid,setReward);
  }, [uuid]);


  return (
    <>
      <Navbar />
      <div className="container pt-4">
        <Typography className={`${styles.navigation}`}>
          <ArrowBackIosNewIcon sx={{fontSize:13}}/>
          <Link className="text-decoration-none" href={'/'}>
            Back
          </Link>
        </Typography>
      </div>
      <div className={`${styles.mainDiv}`}>
        <div className="container shadow mt-4">
          <div className="row">
            <div className="col-md-4">
              <div>
                <img
                  src={actor.picture}
                  className={`${styles.actorImage}`}
                  alt="..."
                ></img>
              </div>

              <div className="info">
                <Typography variant='h3'>
                  personal information
                </Typography>
                <Typography variant='text' className="fw-bolder mt-2">Known for</Typography>
                <h6>Acting</h6>
                <h6 className="fw-bolder">Gender</h6>
                <h6>
                  {actor.firstName} {actor.lastName}
                </h6>
                <h6 className="fw-bolder">Birthdate</h6>
                <h6>{actor.birthDate}</h6>
              </div>
            </div>

            <div className="col-md-8">
              <div className="info">
                <h2 className="fw-bolder">
                  {actor.firstName} {actor.lastName}
                </h2>
                <div className="d-flex">
                   <h6 className={`${styles.icon}`}><StarIcon sx={{ fontSize: 18 }}/></h6>
                  <h6 className="rate">
                    {' '}
                    <span className="text-primary"> 9.2</span>{' '}
                    <span className={styles.grey}>reviews (420)</span>
                  </h6>
                </div>
                <h4 className={`${styles.darkBlue} fw-bolder`}>Biography</h4>
                <p className={`${styles.darkBlue} mt-2`}>{actor.bio}</p>
                <h4 className={`${styles.darkBlue} fw-bolder`}>Acting</h4>
                <ul>
                  {movieActor.map((actor, indexx) => {
                    return (
                      <li key={indexx} className={`${styles.role} py-2`}>
                        {actor.movie.title}
                        <span className="text-muted"> as</span>{' '}
                        {actor.character}
                      </li>
                    );
                  })}
                </ul>
                <Reward reward={reward} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
