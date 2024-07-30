import AwardCard from '@/components/actor/award-card';
import Typography from '@mui/material/Typography';

const AwardsContainer = ({ awards }) => {
  return (
    <>
      {awards && awards.length > 0 && (
        <>

          <Typography variant="h3" sx={{ paddingBottom: '8px' }}>
            Awards & Nomination
          </Typography>

          {awards.map((award, index) => (
            <AwardCard award={award} key={`award-card-${index}`}></AwardCard>
          ))}
        </>
      )}
    </>
  );
};

export default AwardsContainer;