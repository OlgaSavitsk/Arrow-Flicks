import { useCallback, useEffect } from 'react';
import { useAppContext } from '@hooks/index';
import { MovieRequestParams } from '@typing/index';
import { SimpleGrid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { appActions } from '@store/index';
import FiltersBlock from './components/filters-block';

const HomePage = () => {
  const { dispatch } = useAppContext();

  const form = useForm<Partial<MovieRequestParams>>({
    initialValues: {
      page: 1,
      vote_average: {
        gte: null,
        lte: null,
      },
    },
  });

  const onResetFilterValue = useCallback(() => {
    form.reset();
  }, [form]);

  useEffect(() => {
    dispatch(appActions.setParams(form.values));
  }, [dispatch, form.values]);

  return (
    <>
      <FiltersBlock form={form} onResetFilterValue={onResetFilterValue} />
      <SimpleGrid
        cols={{ base: 1, sm: 1, lg: 2 }}
      />
    </>
  );
};

export default HomePage;
