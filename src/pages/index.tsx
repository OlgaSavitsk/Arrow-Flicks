import { useCallback, useEffect } from 'react';
import { SimpleGrid } from '@mantine/core';
import { useForm } from '@mantine/form';
import FiltersBlock from '@components/filters-block';
import {
  EmptyStateComponent, LoaderComponent,
  PaginationComponent, renderMovies,
} from '@components/index';
import { EmptyState } from '@constants/index';
import { useAppContext } from '@hooks/index';
import { appActions } from '@store/index';
import { MovieRequestParams, VoteAvrg } from '@typing/index';
import { isArrayWithItems, rateFilterValidator } from '@utils/index';

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
  const { dispatch, state: { movies, error, isLoading } } = useAppContext();

  const { results, total_pages } = { ...movies };

  const isEmptyState = !!error || !isArrayWithItems(results);

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
    <>
      <FiltersBlock form={form} />

      {isEmptyState
        ? <EmptyStateComponent status={EmptyState.EmptyMovie} height={252} justify="start" />
        : (
          <>
            <SimpleGrid
              cols={{ base: 1, md: 1, lg: 2 }}
              pos="relative"
            >
              {renderMovies({ results })}
              <LoaderComponent isLoading={isLoading} />
            </SimpleGrid>
            <PaginationComponent pagesCount={total_pages} form={form} />
          </>
        )}
    </>
  );
};

export default HomePage;
