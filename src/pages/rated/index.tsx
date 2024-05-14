import { useEffect } from 'react';
import { Button, Group } from '@mantine/core';
import { NextPage } from 'next';

const RatedPage: NextPage = () => {
  useEffect(() => {
    const fetch = async () => {};
    fetch();
  }, []);

  return (
    <Group justify="center">
      <Button size="xl">Rated</Button>
    </Group>
  );
};

export default RatedPage;
