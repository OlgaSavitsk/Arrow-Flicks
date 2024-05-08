import axios from 'axios';

export function getMovieList() {
  return axios.get('/api/movie');
}

export function getGenreList() {
  return axios.get('/api/list');
}

export function getDetailsMovie(id: number) {
  return axios.get(`/api/movie/${id}`);
}
