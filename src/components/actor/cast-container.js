import CastCard from '@/components/actor/cast-card';
import styles from '@/styles/Cast.module.css';
import Typography from '@mui/material/Typography';

const CastContainer = ({ actors }) => {
  return (
    <>
      {actors.length > 0 &&
        <Typography variant="h3">
          Cast
        </Typography>
      }
      <div className={styles.castCardContainer}>
        {actors.map((actor, index) => (
          <CastCard actor={actor} key={`cast-actor-${index}`} />
        ))}
      </div>
    </>
  );

};

export default CastContainer;