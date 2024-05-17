import { useCallback, useEffect, useState } from 'react';
import { YearPickerInput } from '@mantine/dates';
import { Button, Grid, Select } from '@mantine/core';
import { IconChevron, MultiSelectValueRenderer } from '@components/index';
import { movieApi } from '@services/index';
import { selectOptions } from '../../config/home.config';

import classes from './index.module.css';
import RatingComponent from '../rating';

const FiltersBlock = () => {
  const [value, setValue] = useState<string | null>(null);
  const [genresList, setGenresList] = useState([]);

  const fetchMoviesList = useCallback(async () => {
    const { data } = await movieApi.getGenreList();
    setGenresList(data.genres);
  }, []);

  useEffect(() => {
    fetchMoviesList();
  }, [fetchMoviesList]);

  return (
    <Grid align="flex-end" justify="flex-end">
      <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
        <MultiSelectValueRenderer label="Genres" placeholder="Select genre" genresList={genresList} />
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
        <YearPickerInput
          label="Release year"
          placeholder="Select release year"
          size="md"
          rightSection={<IconChevron size={20} />}
          classNames={{ input: classes.input }}
        />
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
        <RatingComponent />
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6, lg: 'content' }}>
        <Button variant="transparent" color="gray" fw={500} size="md">Reset filters</Button>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6, lg: 3.5 }} offset={8}>
        <Select
          label="Sort by"
          placeholder="Most popular"
          data={selectOptions}
          value={value}
          onChange={setValue}
          size="md"
          maxDropdownHeight={200}
          comboboxProps={{ position: 'bottom', transitionProps: { transition: 'fade', duration: 200 } }}
          rightSection={<IconChevron size={20} />}
          classNames={{ input: classes.input, option: classes.option }}
        />
      </Grid.Col>
    </Grid>
  );
};

export default FiltersBlock;
