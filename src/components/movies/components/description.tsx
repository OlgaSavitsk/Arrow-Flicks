import { Fragment } from 'react';
import dayjs from 'dayjs';
import { useAppContext } from '@hooks/use-context.hook';
import {
  Grid, GridCol, Text,
} from '@mantine/core';
import { MovieDetails } from '@typing/movie.types';
import { formatCurrency, getGenresName, isValueResponse } from '@utils/index';

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
      id: 1,
    },
    {
      title: 'Premiere',
      value: dayjs(movie.release_date).format('MMMM D,YYYY'),
      id: 2,
    },
    {
      title: 'Budget',
      value: formatCurrency(movie.budget),
      id: 3,
    },
    {
      title: 'Gross worldwide',
      value: formatCurrency(movie.revenue),
      id: 4,
    },
    {
      title: 'Genres',
      value: isValueResponse(movieGenres)
        && getGenresName(movieGenres, genres).join(', '),
      id: 5,
    },
  ];

  return (
    <Grid justify="flex-start" align="center" gutter={{ base: 0, md: 4 }}>
      {items.map(({ title, value, id }) => (
        <Fragment key={id}>
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
        </Fragment>
      ))}
    </Grid>
  );
};

export default Description;
