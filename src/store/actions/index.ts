import { Genre, MovieRequestParams, MovieResponse } from '@typing/movie.types';
import { AppAction, AppTypes } from '../types';

export const getMovies = (payload?: MovieRequestParams) => ({
  type: AppTypes.GET_MOVIES,
  payload,
});

export const setMovies = (payload: MovieResponse[]): AppAction<MovieResponse[]> => ({
  type: AppTypes.SET_MOVIES,
  payload,
});

export const setParams = (payload?: Partial<MovieRequestParams>) => ({
  type: AppTypes.SET_PARAMS,
  payload,
});

export const setGenres = (payload: Genre[]) => ({
  type: AppTypes.SET_GENRES,
  payload,
});

export const initStorage = (payload: Array<number>) => ({
  type: AppTypes.INIT_STORAGE,
  payload,
});

export const setFavorites = (payload: number) => ({
  type: AppTypes.SET_FAVORITES,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: AppTypes.SET_LOADING,
  payload,
});
