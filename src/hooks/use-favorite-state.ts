import { useCallback } from 'react';
import { DEFAULT_STORAGE_CONFIG, LocalStorageKey } from '@constants/index';
import { FavoriteInfo } from '@typing/index';
import { appActions } from '@store/index';
import { useStorage } from './use-storage.hook';
import { useAppContext } from './use-context.hook';

export const useFavoriteState = () => {
  const [{ favorites }, setValue] = useStorage(
    LocalStorageKey.favorites,
    DEFAULT_STORAGE_CONFIG,
  );
  const { dispatch, state } = useAppContext();

  const getFavoriteIndex = (payload: FavoriteInfo) => state.favorites.findIndex(
    ({ id }: FavoriteInfo) => id === payload.id,
  );

  const handleSaveFavorites = (payload: FavoriteInfo) => {
    let storageState: Array<FavoriteInfo> = [];
    const index = getFavoriteIndex(payload);
    if (index === -1) {
      storageState = [...favorites, payload];
    } else {
      favorites[index] = { ...payload };
      storageState = favorites;
    }
    setValue({ favorites: storageState });
    dispatch(appActions.initStorage(storageState));
  };

  const onRemoveFavorites = (movieId: number) => {
    const storageState = favorites
      .filter(({ id }: FavoriteInfo) => id !== movieId);
    setValue({ favorites: storageState });
    dispatch(appActions.initStorage(storageState));
  };

  const getFavoriteMovie = useCallback((
    movieId: number,
  ) => state.favorites
    .find(({ id }: FavoriteInfo) => id === movieId), [state.favorites]);

  return {
    favorites, getFavoriteMovie, handleSaveFavorites, onRemoveFavorites,
  };
};
