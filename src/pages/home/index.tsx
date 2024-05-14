import { useEffect } from 'react';
import { movieApi } from '@services/index';
import FiltersBlock from './filters-block';

const HomePage = () => {
  useEffect(() => {
    const fetch = async () => {
      const { data } = await movieApi.getMovieList();
      console.log('data', data);
    };
    fetch();
  }, []);

  return (
    <FiltersBlock />
  );
};

export default HomePage;
