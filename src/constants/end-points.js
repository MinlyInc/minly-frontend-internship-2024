export const BACKEND_URL = 'http://localhost:3000';

export const MOVIES_END_POINT = `${BACKEND_URL}/movies`;

export const MOVIE_DETAILS_END_POINT = (uuid) => `${MOVIES_END_POINT}/${uuid}`;

export const ACTOR_DETAILS_END_POINT = (uuid) => `${BACKEND_URL}/actors/${uuid}`;