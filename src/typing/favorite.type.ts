import { MovieDetails, Result } from './movie.types';

export type FavoriteInfo = (Result | MovieDetails) & {
  rating: number;
};
