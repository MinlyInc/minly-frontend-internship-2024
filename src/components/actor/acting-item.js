import styles from '@/styles/Actor.module.css';


const ActorItem = ({ movieActor }) => {

  return (
    <li className={styles.actingListItem}>
      <div className={styles.actingListContainerOfOneItem}>
        <text className={styles.actingListItemMovieProperty}>{movieActor.movie.title}</text>
        <text className={styles.actingListItemAsProperty}>as</text>
        <text className={styles.actingListItemCharacterProperty}>{movieActor.character}</text>
      </div>
    </li>
  );
};

export default ActorItem;