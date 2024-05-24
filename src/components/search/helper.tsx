import { FavoriteInfo } from '@typing/index';

export const setSearchedValue = (
  favorites: FavoriteInfo[],
  searchText: string,
) => favorites.filter((favorite) => favorite.original_title
  .toLowerCase()
  .includes(searchText.toLowerCase()));
