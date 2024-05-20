import { useCallback, useEffect } from 'react';
import { useAppContext } from '@hooks/index';
import { MovieRequestParams, VoteAvrg } from '@typing/index';
import { SimpleGrid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { appActions } from '@store/index';
import { PaginationComponent, renderMovies } from '@components/index';
import FiltersBlock from './components/filters-block';

const initialValues = {
  page: 1,
  with_genres: '',
  vote_average: {
    gte: '',
    lte: '',
  },
  primary_release_year: null,
  sort_by: null,
};

const HomePage = () => {
  const { dispatch, state: { movies } } = useAppContext();

  const form = useForm<Partial<MovieRequestParams>>({
    initialValues,
    transformValues: ({
      vote_average, ...rest
    }: Partial<MovieRequestParams>) => (rest),
  });

  const setParams = useCallback(() => {
    const params = {
      ...form.getTransformedValues(),
      [VoteAvrg.gte]: form.values.vote_average?.gte,
      [VoteAvrg.lte]: form.values.vote_average?.lte,
    };
    dispatch(appActions.setParams(params));
  }, [form.values]);

  useEffect(() => {
    setParams();
  }, [setParams]);

  return (
    <>
      <FiltersBlock form={form} />
      <SimpleGrid
        cols={{ base: 1, md: 1, lg: 2 }}
      >
        {renderMovies({ movies })}
      </SimpleGrid>
      <PaginationComponent form={form} />
    </>
  );
};

export default HomePage;
