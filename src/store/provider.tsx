import {
  useReducer, useMemo, useCallback, useEffect,
} from 'react';
import { isAxiosError } from 'axios';
import { LocalStorageKey, DEFAULT_STORAGE_CONFIG, HttpStatusCode } from '@constants/index';
import { useStorage } from '@hooks/index';
import { movieApi } from '@services/index';
import { appActions } from '.';
import { AppContext } from './context';
import { appReducer, initialState } from './reducers';

export const AppProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [{ favorites }] = useStorage(LocalStorageKey.favorites, DEFAULT_STORAGE_CONFIG);

  const { params } = state;

  const appProviderValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const fetchMovies = useCallback(async () => {
    appProviderValue.dispatch(appActions.setLoading(true));
    try {
      const { data: { results } } = await movieApi.getMoviesList(params);
      appProviderValue.dispatch(appActions.setMovies(results));
    } catch (error) {
      if (isAxiosError(error)) {
        const status = error.response?.status;

        if (status === HttpStatusCode.BAD_REQUEST) {
          appProviderValue.dispatch(appActions.setError(status));
        }
      }
      appProviderValue.dispatch(appActions.setLoading(false));
    }
  }, [params]);

  const fetchGenresList = useCallback(async () => {
    appProviderValue.dispatch(appActions.setLoading(true));
    try {
      const { data: { genres } } = await movieApi.getGenreList();
      appProviderValue.dispatch(appActions.setGenres(genres));
    } catch (error) {
      appProviderValue.dispatch(appActions.setLoading(false));
      throw error;
    }
  }, [appProviderValue]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    fetchGenresList();
  }, []);

  useEffect(() => {
    dispatch(appActions.initStorage(favorites));
  }, [favorites]);

  return (
    <AppContext.Provider value={appProviderValue}>
      {children}
    </AppContext.Provider>
  );
};
