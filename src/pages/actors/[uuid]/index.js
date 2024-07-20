import uuid from '@/pages/movies/[uuid]';
import { useRouter } from 'next/navigation'
import { actor_details_end_point } from '@/constants/end-points';
import styles from '@/styles/Actor.module.css' ;
import ActorPersonalInformationCard from '@/components/actor/actor-personal-information-card';

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


  return { props: { actorInformation : parsedData.actor_information , awards: parsedData.awards } }
}


const ActorDetailsPage = ({actorInformation , awards}) => {
    return (
      <div className={styles.actorContainer}>
       <ActorPersonalInformationCard actorInformation={actorInformation}/>

      </div>
    );
}


export default ActorDetailsPage;