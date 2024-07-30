import styles from '@/styles/Cast.module.css';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';


const CastCard = ({ actor }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/actors/${actor.uuid}`);
  };

  return (
    <div className={styles.castCard} onClick={handleNavigate}>
      <img src={actor.picture} alt={actor.name} />
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '14px' }}>

        <Typography component="text" fontWeight="fontWeightRegular" sx={{ fontSize: '14px' }}>
          {actor.name}
        </Typography>


        <Typography component="text" fontWeight="fontWeightRegular" sx={{ fontSize: '14px' }}>
          {actor.character}
        </Typography>

      </div>
    </div>
  );
};

export default CastCard;