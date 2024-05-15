import { AppAction, AppState, AppTypes } from '@store/types';
import { MovieRequestParams, MovieResponse } from '@typing/movie.types';

export const initialState: AppState = {
  movies: [],
  favorites: [],
  params: null,
  isLoading: false,
};

export const appReducer = <T>(
  state = initialState,
  { type, payload }: AppAction<T>,
) => {
  switch (type) {
    case AppTypes.GET_MOVIES: {
      return { ...state, isLoading: true };
    }
    case AppTypes.SET_MOVIES: {
      return {
        ...state,
        movies: payload as MovieResponse[],
        isLoading: false,
      };
    }
    case AppTypes.SET_PARAMS: {
      return {
        ...state,
        params: payload as MovieRequestParams,
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
    default:
      return state;
  }
};
