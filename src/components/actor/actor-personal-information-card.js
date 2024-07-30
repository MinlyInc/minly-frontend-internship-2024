import styles from '@/styles/Actor.module.css';
import Typography from '@mui/material/Typography';


const ActorPersonalInformationCard = ({ actorInformation }) => {
  return (
    <div className={styles.actorPersonalInformationContainer}>
      <img src={actorInformation.name} alt="Girl in a jacket" />

      <Typography variant="h3">
        Personal Information
      </Typography>
      <Typography variant="text">
        Know for
      </Typography>
      <Typography variant="text" fontWeight="fontWeightLight" sx={{ marginBottom: '6px' }}>
        acting
      </Typography>


      <Typography variant="text">
        Gender
      </Typography>
      <Typography variant="text" fontWeight="fontWeightLight" sx={{ marginBottom: '6px' }}>
        {actorInformation.gender}
      </Typography>


      <Typography variant="text">
        Birthdate
      </Typography>
      <Typography variant="text" fontWeight="fontWeightLight" sx={{ marginBottom: '6px' }}>
        {actorInformation.birth_date}
      </Typography>

      <Typography variant="text">
        Nationality
      </Typography>
      <Typography variant="text" fontWeight="fontWeightLight" sx={{ marginBottom: '6px' }}>
        {actorInformation.nationality}
      </Typography>
    </div>
  );
};

export default ActorPersonalInformationCard;