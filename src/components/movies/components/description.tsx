import dayjs from 'dayjs';
import { useAppContext } from '@hooks/use-context.hook';
import {
  Grid, GridCol, Text,
} from '@mantine/core';
import { MovieDetails } from '@typing/movie.types';
import { isValueResponse, formatCurrency, getGenresName } from '@utils/index';

type MovieProps = {
  movieGenres: number[],
  movie: MovieDetails
};

export const Description: React.FC<MovieProps> = ({ movieGenres, movie }) => {
  const { state: { genres } } = useAppContext();

  const items = [
    {
      title: 'Duration',
      value: `${dayjs(movie.runtime).hour()}h ${dayjs(movie.runtime).minute()}m`,
    },
    {
      title: 'Premiere',
      value: dayjs(movie.release_date).format('MMMM D,YYYY'),
    },
    {
      title: 'Budget',
      value: formatCurrency(movie.budget),
    },
    {
      title: 'Gross worldwide',
      value: formatCurrency(movie.revenue),
    },
    {
      title: 'Genres',
      value: isValueResponse(movieGenres)
        && getGenresName(movieGenres, genres).join(', '),
    },
  ];

  return (
    <Grid justify="flex-start" align="center" gutter={{ base: 0, md: 4 }}>
      {items.map(({ title, value }) => (
        <>
          <GridCol span={{ base: 24, md: 4 }}>
            <Text c="dimmed">
              {title}
            </Text>
          </GridCol>
          <GridCol span={{ base: 24, sm: 10, md: 8 }}>
            <Text lineClamp={1}>
              {value}
            </Text>
          </GridCol>
        </>
      ))}
    </Grid>
  );
};

export default Description;
