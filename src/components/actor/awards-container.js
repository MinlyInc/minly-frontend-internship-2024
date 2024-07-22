import styles from '@/styles/Actor.module.css';
import AwardCard from '@/components/actor/award-card';

const AwardsContainer = ({ awards }) => {
  console.log(awards);
  return (
    <>
      <h2 className={styles.actorDetailedInformationDefaultProperty}>Awards & Nominations</h2>
      {awards && awards.length > 0 && awards.map((award, index) => (
        <AwardCard award={award} key={`award-card-${index}`}></AwardCard>
      ))}
    </>
  );
};
  
export default AwardsContainer;