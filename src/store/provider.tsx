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

  const appProviderValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const fetchMovies = useCallback(async () => {
    appProviderValue.dispatch(appActions.getMovies());
    const { data } = await movieApi.getMovieList(params);
    appProviderValue.dispatch(appActions.setMovies(data));
  }, [params]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    console.log('222', storageState.favorites);
    if (storageState.favorites) {
      dispatch(appActions.initStorage(storageState.favorites));
    }
  }, []);

  return (
    <AppContext.Provider value={appProviderValue}>
      {children}
    </AppContext.Provider>
  );
};
