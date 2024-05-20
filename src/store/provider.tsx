import {
  useReducer, useMemo, useCallback, useEffect,
} from 'react';
import { LocalStorageKey, DEFAULT_STORAGE_CONFIG } from '@constants/index';
import { useStorage } from '@hooks/index';
import { movieApi } from '@services/index';
import { appActions } from '.';
import { AppContext } from './context';
import { appReducer, initialState } from './reducers';

export const AppWrapper = ({ children }: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [storageState] = useStorage(LocalStorageKey.favorites, DEFAULT_STORAGE_CONFIG);

  const { params } = state;
  const { favorites } = storageState;

  const appProviderValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const fetchMovies = useCallback(async () => {
    appProviderValue.dispatch(appActions.setLoading(true));
    try {
      const { data: { results } } = await movieApi.getMoviesList(params);
      appProviderValue.dispatch(appActions.setMovies(results));
    } catch (error) {
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
    }
  }, [appProviderValue]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    fetchGenresList();
  }, []);

  useEffect(() => {
    if (favorites) {
      dispatch(appActions.initStorage(favorites));
    }
  }, [favorites]);

  return (
    <AppContext.Provider value={appProviderValue}>
      {children}
    </AppContext.Provider>
  );
};
