import { useEffect } from 'react';
import { Button, Group } from '@mantine/core';
import { NextPage } from 'next';
// import { movieApi } from '@services/index';

const HomePage: NextPage = () => {
  useEffect(() => {
    const fetch = async () => {
      // const data = await movieApi.getMovieList();
      // console.log('data', data);
    };
    fetch();
  }, []);

  return (
    <Group>
      <Button size="xl">Welcome to Mantine!</Button>
    </Group>
  );
};

export default HomePage;
