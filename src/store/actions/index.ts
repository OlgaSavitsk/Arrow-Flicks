import {
  Genre, MovieRequestParams, MovieResponse, FavoriteInfo,
} from '@typing/index';
import { HttpStatusCode } from '@constants/index';
import { AppAction, AppTypes } from '../types';

// export const getResponse = (payload?: MovieRequestParams) => ({
//   type: AppTypes.GET_MOVIES,
//   payload,
// });

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

export const initStorage = (payload: Array<FavoriteInfo>) => ({
  type: AppTypes.INIT_STORAGE,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: AppTypes.SET_LOADING,
  payload,
});

export const setError = (payload: HttpStatusCode) => ({
  type: AppTypes.SET_ERROR,
  payload,
});
