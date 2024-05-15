import { MovieRequestParams, MovieResponse } from '@typing/movie.types';

export enum AppTypes {
  GET_MOVIES = 'GET_MOVIES',
  SET_MOVIES = 'SET_MOVIES',
  SET_PARAMS = 'SET_PARAMS',
  INIT_STORAGE = 'INIT_STORAGE',
  SET_FAVORITES = 'SET_FAVORITES',
  SET_LOADING = 'SET_LOADING',
}

export type AppState = {
  movies: MovieResponse[];
  favorites: number[];
  params: MovieRequestParams | null,
  isLoading: boolean;
};

export type AppAction<Payload> = {
  type: AppTypes;
  payload: Payload;
};

export type AppReducer = (state: AppState, actions: AppAction<AppState>) => AppState;

export type ContextProps = {
  state: AppState;
  dispatch: React.Dispatch<AppAction<unknown>>;
};
