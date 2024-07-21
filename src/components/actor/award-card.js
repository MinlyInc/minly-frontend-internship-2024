import styles from '@/styles/Actor.module.css';


const AwardCard = ({ award }) => {

  return (
    <div className={styles.awardCard}>
      <img src={award.movie.poster} alt="Actor image" />

      <div style={{ marginTop: '12px' }}>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <text style={{
            margin: 0,
            fontWeight: 600,
            color: 'rgba(0, 48, 85, 1)',
            fontFamily: 'Inter',
          }}> {award.year} </text>
          &nbsp;
          <text style={{ margin: 0, fontWeight: 600, color: 'rgba(0, 48, 85, 1)', fontFamily: 'Inter' }}>Nominee</text>

          <text style={{
            fontWeight: 400,
            color: 'rgba(105, 117, 134, 1)',
            fontFamily: 'Inter',
          }}>  &nbsp;{award.name} </text>
        </div>

        <text style={{ color: 'rgba(0, 48, 85, 1)', fontWeight: 400, fontFamily: 'Inter' }}> {award.description}</text>


        <div style={{
          color: 'rgba(65, 140, 251, 1)',
          fontWeight: 400,
          fontFamily: 'Inter',
        }}>{award.movie.title}</div>

      </div>

    </div>
  );
};

export default AwardCard;