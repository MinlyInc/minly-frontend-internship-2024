import React from 'react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

export default function Reward({ reward }) {
  return (
    <>
      {reward.map((reward, ind) => (
        <div key={ind} className={`${styles.rewardCard} card shadow `}>
          <div className="card-body d-flex">
            <div className="col-1">
              <div className={`${styles.rewardImage}`}>
                <img
                  width={50}
                  height={74}
                  src={reward.actorMoviesMovie.movie.poster}
                  alt=""
                />
              </div>
            </div>
            <div className={`${styles.infoReward} col-11 ms-2`}>
              <div>
                <h6>
                  {' '}
                  <span className=" fw-bolder">{reward.year}</span>{' '}
                  <span className=" fw-bolder"> {reward.type}</span>{' '}
                  <span className="text-muted">{reward.award.name}</span>
                </h6>
                <h6 className={`${styles.rolee}`}>{reward.role}</h6>
                <Link
                  className="text-decoration-none"
                  href={`/MovieDetails/${reward.actorMoviesMovie.movie.uuid}`}
                >
                  <h6 className={`${styles.rewardMovie}`}>
                    {reward.actorMoviesMovie.movie.title}
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
