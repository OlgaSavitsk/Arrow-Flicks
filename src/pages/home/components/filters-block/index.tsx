import { useCallback, useEffect, useState } from 'react';
import { YearPickerInput } from '@mantine/dates';
import { Button, Grid, Select } from '@mantine/core';
import { IconChevron, MultiSelectValueRenderer } from '@components/index';
import { movieApi } from '@services/index';
import { UseFormReturnType } from '@mantine/form';
import { MovieRequestParams } from '@typing/movie.types';
import { selectOptions } from '../../config/home.config';

import classes from './index.module.css';
import RatingComponent from '../rating';

type FiltersBlockProps = {
  form: UseFormReturnType<Partial<MovieRequestParams>>
  onResetFilterValue: () =>void
};

const FiltersBlock: React.FC<FiltersBlockProps> = ({ form, onResetFilterValue }) => {
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
        <MultiSelectValueRenderer
          label="Genres"
          placeholder="Select genre"
          genresList={genresList}
        />
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
        <YearPickerInput
          label="Release year"
          placeholder="Select release year"
          size="md"
          rightSection={<IconChevron size={20} />}
          classNames={{ input: classes.input }}
          {...form.getInputProps('primary_release_year')}
        />
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
        <RatingComponent form={form} />
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6, lg: 'content' }}>
        <Button variant="transparent" color="gray" fw={500} size="md" onClick={onResetFilterValue}>Reset filters</Button>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6, lg: 3.5 }} offset={8}>
        <Select
          label="Sort by"
          placeholder="Most popular"
          data={selectOptions}
          size="md"
          maxDropdownHeight={200}
          comboboxProps={{ position: 'bottom', transitionProps: { transition: 'fade', duration: 200 } }}
          rightSection={<IconChevron size={20} />}
          classNames={{ input: classes.input, option: classes.option }}
          {...form.getInputProps('sort_by')}
        />
      </Grid.Col>
    </Grid>
  );
};

export default FiltersBlock;
