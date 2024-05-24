import { DEFAULT_STORAGE_CONFIG, HttpStatusCode, LocalStorageKey } from '@constants/index';
import { useStorage } from '@hooks/index';
import { movieApi } from '@services/index';
import { isAxiosError } from 'axios';
import {
  useCallback, useEffect,
  useMemo, useReducer,
} from 'react';

import { appActions } from '.';
import { AppContext } from './context';
import { appReducer, initialState } from './reducers';

export const AppProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [{ favorites }] = useStorage(LocalStorageKey.favorites, DEFAULT_STORAGE_CONFIG);

  const { params } = state;

  const fetchDetails = useCallback(async (id: string) => {
    dispatch(appActions.setLoading(true));
    try {
      const { data } = await movieApi.getDetailsMovie(id);

      dispatch(appActions.setMovieDetails(data));
    } catch (error) {
      dispatch(appActions.setLoading(false));
      throw error;
    }
  }, []);

  const appProviderValue = useMemo(() => ({
    state, dispatch, fetchDetails,
  }), [state, dispatch, fetchDetails]);

  const fetchMovies = useCallback(async () => {
    appProviderValue.dispatch(appActions.setLoading(true));
    try {
      const { data } = await movieApi.getMoviesList(params);

      appProviderValue.dispatch(appActions.setMovies(data));
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
