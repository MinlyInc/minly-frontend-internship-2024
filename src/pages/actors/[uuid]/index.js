import { ACTOR_DETAILS_END_POINT } from '@/constants/end-points';
import styles from '@/styles/Actor.module.css';
import ActorPersonalInformationCard from '@/components/actor/actor-personal-information-card';
import StarIcon from '@mui/icons-material/Star';
import ActingContainer from '@/components/actor/acting-container';
import AwardsContainer from '@/components/actor/awards-container';
import Typography from '@mui/material/Typography';

export async function getServerSideProps(context) {
  const { uuid } = context.params;
  const res = await fetch(`${ACTOR_DETAILS_END_POINT(uuid)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const parsedData = await res.json();
  return {
    props: {
      actorInformation: parsedData.actor_information,
      actingList: parsedData.acting_list,
      awards: parsedData.awards,
    },
  };
}

const ActorDetailsPage = ({ actorInformation, actingList, awards }) => {
  return (
    <div className={styles.actorContainer}>
      <ActorPersonalInformationCard actorInformation={actorInformation} />

      <div className={styles.actorDetailedInformationContainer}>


        <Typography variant="h1" fontWeight="fontWeightExtraBold" sx={{ paddingTop: '46px', paddingBottom: '13px' }}>
          {actorInformation.name}
        </Typography>

        <div className={styles.actorDetailedInformationRatingContainer}>
          <StarIcon sx={{ color: 'rgba(254, 182, 0, 1)' }}></StarIcon>
          <Typography varint="h2" sx={{ paddingBottom: '8px' }}>
            {actorInformation.average_rating}
          </Typography>
        </div>


        <Typography varint="h2" sx={{ paddingBottom: '8px', fontSize: '1.5rem' }}>
          Biography
        </Typography>

        <Typography variant="p" fontWeight="fontWeightLight"
                    sx={{ marginBotoom: '31px', marginLeft: '2px', marginBottom: '2rem' }}>
          {actorInformation.bio}
        </Typography>

        <ActingContainer actingList={actingList}></ActingContainer>
        <br />
        <AwardsContainer awards={awards}></AwardsContainer>

      </div>
    </div>
  );
};

export default ActorDetailsPage;
