export enum LocalStorageKey {
  authToken = 'access_token',
}

export const DEFAULT_STORAGE_CONFIG: StorageConfig = {
  accessToken: '',
};

type StorageConfig = {
  accessToken: string;
};
