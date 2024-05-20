import { Genre, MovieRequestParams, Result } from '@typing/index';

export enum AppTypes {
  GET_MOVIES = 'GET_MOVIES',
  SET_MOVIES = 'SET_MOVIES',
  SET_PARAMS = 'SET_PARAMS',
  SET_GENRES = 'SET_GENRES',
  INIT_STORAGE = 'INIT_STORAGE',
  SET_FAVORITES = 'SET_FAVORITES',
  SET_LOADING = 'SET_LOADING',
}

export type AppState = {
  movies: Result[];
  favorites: number[];
  params: MovieRequestParams | null,
  genres: Genre[]
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
