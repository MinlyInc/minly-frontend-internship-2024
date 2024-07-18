
import styles from '@/styles/Cast.module.css'


const CastCard = ({actor}) => {

  return(
    <div className={styles.castCard}>
      <img src="https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg" alt="Cast Card"/>
      <div style={{display: 'flex', flexDirection: 'column' , paddingLeft: '14px' }}>
        <text className={styles.actorName}>{actor.name}</text>
        <text className={styles.actorCharacter}>{actor.character}</text>
      </div>
    </div>
  );
}

export default CastCard;