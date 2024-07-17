import CastCard from '@/components/cast/cast-card';
import styles from '@/styles/Cast.module.css'


const CastContainer = ({ actors }) => {

  return (
    <div className={styles.castContainer}>
      {actors.map((actor, index) => (
        <CastCard actor={actor} key={`cast-actor-${index}`} />
      ))}
    </div>
  )

}

export default CastContainer ;