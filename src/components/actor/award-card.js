import styles from '@/styles/Actor.module.css';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';


const AwardCard = ({ award }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/movies/${award.movie.uuid}`);
  };


  return (
    <div className={styles.awardCard}>
      <img src={award.movie.poster} alt={award.movie.title} />
      <div style={{ marginTop: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Typography component="text">
            {award.year}
          </Typography>
          &nbsp;

          <Typography component="text">
            Nominee
          </Typography>
          &nbsp;


          <Typography component="text" color="secondary" fontWeight="fontWeightLight">
            &nbsp;{award.name}
          </Typography>
        </div>


        <Typography component="text" fontWeight="fontWeightLight" fontSize="0.9rem">
          {award.description}
        </Typography>


        <div style={{
          color: 'rgba(65, 140, 251, 1)',
          fontWeight: 400,
          fontFamily: 'Inter',
          cursor: 'pointer',
        }} onClick={handleNavigate}>{award.movie.title}</div>

      </div>

    </div>
  );
};

export default AwardCard;