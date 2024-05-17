import { useEffect, useState } from 'react';
import { useAppContext } from '@hooks/index';
import { appActions } from '@store/index';
import { MovieRequestParams } from '@typing/index';
import { SimpleGrid } from '@mantine/core';
import FiltersBlock from './components/filters-block';

const HomePage = () => {
  const [params, setParams] = useState<Partial<MovieRequestParams>>();
  const { dispatch } = useAppContext();

  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      page: 1,
    }));
    dispatch(appActions.setParams(params));
  }, []);

  return (
    <>
      <FiltersBlock />
      <SimpleGrid
        cols={{ base: 1, sm: 1, lg: 2 }}
      />
    </>
  );
};

export default HomePage;
