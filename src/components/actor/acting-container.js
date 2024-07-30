import ActorItem from '@/components/actor/acting-item';
import Typography from '@mui/material/Typography';

const ActingContainer = ({ actingList }) => {
  return (
    <>
      {actingList && actingList.length > 0 &&
        <>

          <Typography variant="h3" sx={{ paddingBottom: '8px' }}>
            Acting
          </Typography>


          <ul>
            {actingList.map((movieActor, index) => (
              <ActorItem key={`acting-item-${index}`} movieActor={movieActor} />
            ))}
          </ul>
        </>
      }
    </>
  );
};

export default ActingContainer;