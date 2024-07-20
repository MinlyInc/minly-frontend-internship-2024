
export const backend_url = 'http://localhost:3000';

export const movies_end_point = `${backend_url}/movies`

export const movie_details_end_point =(uuid) =>  `${movies_end_point}/${uuid}`

export const actor_details_end_point =(uuid) =>  `${backend_url}/actors/${uuid}`