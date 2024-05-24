import { useCallback, useState } from 'react';
import { Button, Grid, Select } from '@mantine/core';
import { DatesProvider, YearPickerInput } from '@mantine/dates';
import { UseFormReturnType } from '@mantine/form';
import { selectOptions } from '@constants/index';
import { IconChevron, MultiSelectValueRenderer } from '@components/index';
import { useAppContext } from '@hooks/index';
import { MovieRequestParams } from '@typing/index';

import RatingComponent from '../rating';
import classes from './index.module.css';

type FiltersBlockProps = {
  form: UseFormReturnType<Partial<MovieRequestParams>>
};

const FiltersBlock: React.FC<FiltersBlockProps> = ({ form }) => {
  const { state: { genres } } = useAppContext();
  const [onResetForm, setOnResetForm] = useState(false);

  const onResetFilterValue = useCallback(() => {
    form.reset();
    setOnResetForm(true);
  }, [form]);

  return (
    <form onReset={form.onReset}>
      <Grid align="flex-end" justify="flex-end">
        <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
          <MultiSelectValueRenderer
            label="Genres"
            placeholder="Select genre"
            genresList={genres}
            form={form}
            onReset={onResetForm}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
          <DatesProvider settings={{ timezone: 'UTC' }}>
            <YearPickerInput
              label="Release year"
              placeholder="Select release year"
              size="md"
              rightSection={<IconChevron size={20} />}
              classNames={{ input: classes.input }}
              {...form.getInputProps('primary_release_year')}
            />
          </DatesProvider>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
          <RatingComponent form={form} />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 'content' }}>
          <Button
            variant="transparent"
            color="gray"
            fw={500}
            size="md"
            type="reset"
            onClick={onResetFilterValue}
          >
            Reset filters
          </Button>
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
            key={form.key('sort_by')}
            {...form.getInputProps('sort_by')}
          />
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default FiltersBlock;
