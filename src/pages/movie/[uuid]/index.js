import { movie_details_end_point } from '@/constants/end-points';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const fetchMovieDetailsData = async (uuid) => {
  const res = await fetch(
    `${movie_details_end_point(uuid)}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const parsedJson = await res.json();
  return parsedJson;
}



const MovieDetailsPage = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect( () => {
    if(uuid){
        fetchMovieDetailsData(uuid).then(data => setMovieDetails(data));
    }
  }, [uuid]);

  return(
    <>
      hello world
    </>
  )
}


export default MovieDetailsPage;