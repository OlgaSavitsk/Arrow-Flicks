import {
  Suspense, useCallback, useEffect, useMemo,
} from 'react';
import { useAppContext } from '@hooks/index';
import { MovieRequestParams, VoteAvrg } from '@typing/index';
import { SimpleGrid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { appActions } from '@store/index';
import { EmptyStateComponent, PaginationComponent, renderMovies } from '@components/index';
import { EmptyState } from '@constants/index';
import { rateFilterValidator } from '@utils/index';
import FiltersBlock from '@components/filters-block';

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
  const { dispatch, state: { movies, error } } = useAppContext();

  const data = useMemo(() => (movies || null), [movies]);

  const isEmptyState = !!error || (data && data.results?.length === 0);

  const form = useForm<Partial<MovieRequestParams>>({
    initialValues,
    validate: {
      vote_average: (value) => rateFilterValidator(value),
    },
    transformValues: ({
      vote_average, ...rest
    }: Partial<MovieRequestParams>) => (rest),
  });

  const setParams = useCallback(() => {
    form.validate();
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
    <Suspense fallback={<div>Loading...</div>}>
      <FiltersBlock form={form} />
      {isEmptyState
        ? <EmptyStateComponent status={EmptyState.EmptyMovie} height={252} justify="start" />
        : (

          data && (
            <>
              <SimpleGrid
                cols={{ base: 1, md: 1, lg: 2 }}
              >
                {renderMovies({ results: data.results })}
              </SimpleGrid>
              <PaginationComponent pagesCount={data.total_pages} form={form} />
            </>
          )

        )}
    </Suspense>
  );
};

export default HomePage;
