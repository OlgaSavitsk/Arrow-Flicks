import { AppAction, AppState, AppTypes } from '@store/types';
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
      return { ...state, favorites: payload as Array<number> };
    }

    case AppTypes.SET_FAVORITES: {
      let { favorites } = state;
      if (state.favorites.includes(payload as number)) {
        favorites = state.favorites.filter((fav) => fav !== payload);
      } else {
        favorites = [...state.favorites, payload as number];
      }
      return { ...state, favorites: [...favorites] };
    }
    case AppTypes.SET_LOADING: {
      return { ...state, isLoading: payload as boolean };
    }
    default:
      return state;
  }
};
