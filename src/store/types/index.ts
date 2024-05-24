import { HttpStatusCode } from '@constants/index';
import {
  FavoriteInfo, Genre, MovieDetails, MovieRequestParams, MovieResponse,
} from '@typing/index';

export enum AppTypes {
  SET_MOVIES = 'SET_MOVIES',
  SET_PARAMS = 'SET_PARAMS',
  SET_GENRES = 'SET_GENRES',
  SET_DETAILS = 'SET_DETAILS',
  INIT_STORAGE = 'INIT_STORAGE',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export type AppState = {
  movies: MovieResponse | undefined;
  favorites: Array<FavoriteInfo>;
  params: MovieRequestParams | null,
  details: MovieDetails | null,
  genres: Array<Genre>,
  isLoading: boolean;
  error: HttpStatusCode | null
};

export type AppAction<Payload> = {
  type: AppTypes;
  payload: Payload;
};

export type AppReducer = (state: AppState, actions: AppAction<AppState>) => AppState;

export type ContextProps = {
  state: AppState;
  dispatch: React.Dispatch<AppAction<unknown>>;
  fetchDetails: (id: string) => void;
};
