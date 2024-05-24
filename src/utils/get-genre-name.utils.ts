import { Genre } from '@typing/index';

export const getGenresName = (genreListId: Array<number>, genresList: Array<Genre>) => {
  const currentGenres = genreListId.flatMap((genreId) => genresList
    .filter(({ id }: Genre) => id === genreId));

  return currentGenres.map((genre: Genre) => genre.name);
};

export const selectedGenreKey = (
  selectedGenres: Array<string>,
  genresList: Array<Genre>,
) => genresList
  .filter(({ name }: Genre) => selectedGenres.includes(name))
  .map(({ id }: Genre) => id)
  .join('|');
