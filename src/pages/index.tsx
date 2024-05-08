import { useEffect } from 'react';
import { Button, Group } from '@mantine/core';
import { movieApi } from '@services/index';

export default function IndexPage() {
  useEffect(() => {
    const fetch = async () => {
      const data = await movieApi.getMovieList();
      console.log('data', data);
    };
    fetch();
  }, []);

  return (
    <Group mt={50} justify="center">
      <Button size="xl">Welcome to Mantine!</Button>
    </Group>
  );
}
