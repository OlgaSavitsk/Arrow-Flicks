import { Result } from '@typing/index';
import { Movie } from './components/movie';

type MoviesProps = {
  movies: Result[]
};

export const renderMovies = ({
  movies,
}: MoviesProps) => (
  movies.map((movie) => <Movie key={movie.id} movie={movie} />)
);
