export enum LocalStorageKey {
  favorites = 'favorites',
}

export const DEFAULT_STORAGE_CONFIG: StorageConfig = {
  favorites: [],
};

type StorageConfig = {
  favorites: Array<number>
};
