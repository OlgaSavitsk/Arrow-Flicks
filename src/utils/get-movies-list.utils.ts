import { movieApi } from '@services/index';
import { cache } from 'react';

export const getMoviesList = cache(async () => {
  const list = await movieApi.getGenreList();
  return list;
});
