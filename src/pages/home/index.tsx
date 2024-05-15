import { useEffect, useState } from 'react';
import { useAppContext } from '@hooks/use-context.hook';
import { appActions } from '@store/index';
import { MovieRequestParams } from '@typing/movie.types';
import FiltersBlock from './filters-block';

const HomePage = () => {
  const [params, setParams] = useState<Partial<MovieRequestParams>>();
  const { state, dispatch } = useAppContext();
  
  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      page: 1,
    }));
    dispatch(appActions.setParams(params));
  }, []);

  return (
    <FiltersBlock />
  );
};

export default HomePage;
