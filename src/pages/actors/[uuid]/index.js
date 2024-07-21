import { actor_details_end_point } from '@/constants/end-points';
import styles from '@/styles/Actor.module.css';
import ActorPersonalInformationCard from '@/components/actor/actor-personal-information-card';
import StarIcon from '@mui/icons-material/Star';

export async function getServerSideProps(context) {
  const { uuid } = context.params;
  const res = await fetch(`${actor_details_end_point(uuid)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const parsedData = await res.json();
  return {
    props: {
      actorInformation: parsedData.actor_information,
      awards: parsedData.awards,
    },
  };
}

const ActorDetailsPage = ({ actorInformation, awards }) => {
  return (
    <div className={styles.actorContainer}>
      <ActorPersonalInformationCard actorInformation={actorInformation} />

      <div className={styles.actorDetailedInformationContainer}>
        <h1 className={styles.actorDetailedInformationNameProperty}>{actorInformation.name}</h1>

        <div className={styles.actorDetailedInformationRatingContainer}>
          <StarIcon sx={{ color: 'rgba(254, 182, 0, 1)' }}></StarIcon>
          <text className={styles.actorDetailedInformationRatingProperty}>{actorInformation.average_rating}</text>
        </div>

        <h2 className={styles.actorDetailedInformationDefaultProperty}>Biography</h2>
        <p className={styles.actorDetailedInformationBioValue}>{actorInformation.bio}</p>

      </div>
    </div>
  );
};

export default ActorDetailsPage;
