import { FavoriteInfo } from '@typing/index';

export const splitData = (array: FavoriteInfo[] | undefined, perPage: number): FavoriteInfo[][] => {
  if (array?.length) {
    const head = array.slice(0, perPage);
    const tail = array.slice(perPage);
    return [head, ...splitData(tail, perPage)];
  } return [];
};
