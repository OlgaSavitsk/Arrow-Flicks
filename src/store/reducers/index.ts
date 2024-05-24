import { HttpStatusCode } from '@constants/status-code.constants';
import { AppAction, AppState, AppTypes } from '@store/types';
import { FavoriteInfo } from '@typing/favorite.type';
import {
  Genre, MovieDetails, MovieRequestParams, MovieResponse,
} from '@typing/movie.types';

export const initialState: AppState = {
  movies: undefined,
  favorites: [],
  params: null,
  genres: [],
  details: null,
  isLoading: false,
  error: null,
  keyWord: '',
};

export const appReducer = <T>(state = initialState, { type, payload }: AppAction<T>) => {
  switch (type) {
    case AppTypes.SET_MOVIES: {
      return {
        ...state,
        movies: payload as MovieResponse,
        keyWord: '',
        isLoading: false,
      };
    }
    case AppTypes.SET_PARAMS: {
      return {
        ...state,
        params: { ...state.params, ...payload } as MovieRequestParams,
        error: null,
      };
    }
    case AppTypes.SET_GENRES: {
      return {
        ...state,
        genres: payload as Array<Genre>,
        isLoading: false,
      };
    }
    case AppTypes.SET_DETAILS: {
      return {
        ...state,
        details: payload as MovieDetails,
        isLoading: false,
      };
    }
    case AppTypes.INIT_STORAGE: {
      return { ...state, favorites: payload as Array<FavoriteInfo> };
    }

    case AppTypes.SET_LOADING: {
      return { ...state, isLoading: payload as boolean };
    }

    case AppTypes.SET_ERROR: {
      return { ...state, error: payload as HttpStatusCode };
    }

    case AppTypes.KEY_WORD: {
      return { ...state, keyWord: payload as string };
    }
    default:
      return state;
  }
};
