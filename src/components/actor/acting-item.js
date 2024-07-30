import styles from '@/styles/Actor.module.css';
import Typography from '@mui/material/Typography';


const ActorItem = ({ movieActor }) => {

  return (
    <li>
      <div className={styles.actingListContainerOfOneItem}>
        <Typography variant="text">
          {movieActor.movie.title}
        </Typography>


        <Typography variant="text" color="secondary" fontWeight="fontWeightLight">
          as
        </Typography>


        <Typography variant="text" fontWeight="fontWeightLight">
          {movieActor.character}
        </Typography>

      </div>
    </li>
  );
};

export default ActorItem;