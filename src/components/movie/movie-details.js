import { useParams } from 'react-router-dom';
import { movie_details_end_point } from '@/constants/end-points';
import { useEffect } from 'react';

async function fetchMovieDetailsData( uuid ){
  const res = await fetch(
    `${movie_details_end_point}`,{
      method: 'GET',
      headers:{
        "Content-Type": "application/json",
      },
    }
  );

  const parsedJson = await res.json();

  // return { movies : formattedMovies , totalNumberOfPages : parsedJson.totalNumberOfPages - 1 } ;
}

const MovieDetails = () => {
  const { uuid } = useParams();

  useEffect(async () => {
    await fetchMovieDetailsData(uuid);
  }, []);

  return(
    <>
      hello world
    </>
  )
}


export default MovieDetails;