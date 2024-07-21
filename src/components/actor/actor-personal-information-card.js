import styles from '@/styles/Actor.module.css';


const ActorPersonalInformationCard = ({ actorInformation }) => {
  return (
    <div className={styles.actorPersonalInformationContainer}>
      <img src={actorInformation.picture} alt="Girl in a jacket" />

      <h2 className={styles.actorPersonalInformationHeader}>Personal Information</h2>
      <text className={styles.actorPersonalInformationCardProperty}>Know for</text>
      <text className={styles.actorPersonalInformationCardPropertyValue}>acting</text>

      <text className={styles.actorPersonalInformationCardProperty}>Gender</text>
      <text className={styles.actorPersonalInformationCardPropertyValue}>{actorInformation.gender}</text>


      <text className={styles.actorPersonalInformationCardProperty}>Birthdate</text>
      <text className={styles.actorPersonalInformationCardPropertyValue}>{actorInformation.birth_date}</text>

      <text className={styles.actorPersonalInformationCardProperty}>Nationality</text>
      <text className={styles.actorPersonalInformationCardPropertyValue}>{actorInformation.nationality}</text>
    </div>
  );
};

export default ActorPersonalInformationCard;