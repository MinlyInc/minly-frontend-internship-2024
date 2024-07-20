import styles from '@/styles/Actor.module.css';


const ActorPersonalInformationCard = ({actorInformation}) => {
  return (
    <div className={styles.actorInformationCard}>
      <img src={actorInformation.picture} alt="Girl in a jacket" />

      <h2 className={styles.actorInformationHeader}>Personal Information</h2>
      <text className={styles.actorInformationCardProperty}>Know for</text>
      <text className={styles.actorInformationCardPropertyValue}>acting</text>

      <text className={styles.actorInformationCardProperty}>Gender</text>
      <text className={styles.actorInformationCardPropertyValue}>{actorInformation.gender}</text>


      <text className={styles.actorInformationCardProperty}>Birthdate</text>
      <text className={styles.actorInformationCardPropertyValue}>{actorInformation.birth_date}</text>

      <text className={styles.actorInformationCardProperty}>Nationality</text>
      <text className={styles.actorInformationCardPropertyValue}>{actorInformation.nationality}</text>
    </div>
  );
}

export default ActorPersonalInformationCard;