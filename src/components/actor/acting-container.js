import styles from '@/styles/Actor.module.css';
import ActorItem from '@/components/actor/acting-item';

const ActingContainer = ({ actingList }) => {
  return (
    <>
      <h2 className={styles.actorDetailedInformationDefaultProperty}>Acting</h2>
      <ul>
        {actingList && actingList.map((movieActor, index) => (
          <ActorItem key={`acting-item-${index}`} movieActor={movieActor} />
        ))}
      </ul>
    </>
  );
};

export default ActingContainer;