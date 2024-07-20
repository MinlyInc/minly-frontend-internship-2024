import uuid from '@/pages/movies/[uuid]';
import { useRouter } from 'next/navigation'
import { actor_details_end_point } from '@/constants/end-points';

export async function getServerSideProps(context){
  const {uuid} = context.params ;

  const res = await fetch(
    `${actor_details_end_point(uuid)}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const parsedData = await res.json();


  return { props: { actorDetails : parsedData } }
}


const ActorDetailsPage = ({actorDetails}) => {
    return (
      <>
      </>
    );
}


export default ActorDetailsPage;