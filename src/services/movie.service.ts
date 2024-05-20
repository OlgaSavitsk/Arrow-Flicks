import axios from 'axios';

export function getMoviesList<T>(params?: T) {
  return axios.get('/api/movie', { params });
}

export function getGenreList() {
  return axios.get('/api/list');
}

export function getDetailsMovie(id: number) {
  return axios.get(`/api/movie/${id}`);
}

export function getMovieImage<T>(params: T) {
  return axios.get('/api/image', { params });
}
