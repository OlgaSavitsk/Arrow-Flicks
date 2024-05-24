import { FavoriteInfo, Result } from '@typing/index';

import { Movie } from './components/movie';

type MoviesProps = {
  results: Array<Result> | Array<FavoriteInfo> | undefined
};

export const renderMovies = ({
  results,
}: MoviesProps) => (
  results && results.map((movie) => <Movie key={movie.id} movie={movie} />)
);
