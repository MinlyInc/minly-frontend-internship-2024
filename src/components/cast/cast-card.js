
import styles from '@/styles/Cast.module.css'
import { useRouter } from 'next/navigation'


// img for testing
// "https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg"

const CastCard = ({actor}) => {
  const router = useRouter()

  const handleNavigate = () => {
    router.push(`/actors/${actor.uuid}`)
  }


  return(
    <div className={styles.castCard} onClick={handleNavigate}>
      <img src={actor.picture} alt="Cast Card"/>
      <div style={{display: 'flex', flexDirection: 'column' , paddingLeft: '14px' }}>
        <text className={styles.actorName}>{actor.name}</text>
        <text className={styles.actorCharacter}>{actor.character}</text>
      </div>
    </div>
  );
}

export default CastCard;