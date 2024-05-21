import { AppAction, AppState, AppTypes } from '@store/types';
import { FavoriteInfo } from '@typing/favorite.type';
import { Genre, MovieRequestParams, Result } from '@typing/movie.types';

export const initialState: AppState = {
  movies: [],
  favorites: [],
  params: null,
  genres: [],
  isLoading: false,
};

export const appReducer = <T>(state = initialState, { type, payload }: AppAction<T>) => {
  switch (type) {
    case AppTypes.SET_MOVIES: {
      return {
        ...state,
        movies: payload as Array<Result>,
        isLoading: false,
      };
    }
    case AppTypes.SET_PARAMS: {
      return {
        ...state,
        params: { ...state.params, ...payload } as MovieRequestParams,
      };
    }
    case AppTypes.SET_GENRES: {
      return {
        ...state,
        genres: payload as Array<Genre>,
        isLoading: false,
      };
    }
    case AppTypes.INIT_STORAGE: {
      return { ...state, favorites: payload as Array<FavoriteInfo> };
    }

    case AppTypes.SET_LOADING: {
      return { ...state, isLoading: payload as boolean };
    }
    default:
      return state;
  }
};
