import axios from "axios";


export function getRewards(uuid,setReward) {
    axios
      .get(`http://localhost:3001/award/${uuid}`)
      .then((res) => {
        console.log('awards', res.data);
        setReward(res.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

 export function getActorById(uuid,setActor,setMovieActor) {
    console.log('hello');
    if (uuid) {
      axios
        .get(`http://localhost:3001/actor/${uuid}`)
        .then((res) => {
          console.log('asssa', res.data);
          setActor(res.data);
          setMovieActor(res.data.movieActorActors);
        })
        .catch((err) => {
          console.log('err actor', err);
        });
    }
  }

 export function getPagination(page,field,filter,setMovies) {
    axios
      .get(
        `http://localhost:3001/movie?page=${page}&sortField=${field}&Genre=${filter}`
      )
      .then((res) => {
        setMovies(res.data.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

