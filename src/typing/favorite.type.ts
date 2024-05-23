import { Result } from './movie.types';

export type FavoriteInfo = Result & {
  rating: number;
};
