import React from 'react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function ActorsCard({ movieActors }) {
  return (
    <>
      {movieActors?.map((actor, index) => (
        <div key={index} className="col-12 col-md-3 ">
          <div className={`card mb-3 ${styles.cardWidth} `}>
            <Link href={`/ActorDetails/${actor.actor.uuid}`}>
              <div
                className={`d-flex align-items-center px-2 shadow border-3 ${styles.castCard}`}
              >
                <div className="img-div">
                  <img
                    height={50}
                    width={55}
                    src={actor.actor.picture}
                    className="py-1 rounded-3"
                    alt="..."
                  />
                </div>
                <div className="align-middle">
                  <h6 className={`px-2 ${styles.Name}`}>
                    {actor.actor.firstName} {actor.actor.lastName}
                  </h6>
                  <h6 className={`px-2 ${styles.character}`}>
                    {actor.character}
                  </h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
