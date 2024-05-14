import { YearPickerInput } from '@mantine/dates';
import { MultiSelect } from '@mantine/core';
import { useState } from 'react';
import { SortParams, VoteAvrg } from '@typing/index';
import { selectOptions } from '../constants/sort';

export type MovieQueryParams = {
  page?: number;
  sort_by?: SortParams;
  primary_release_year: number,
  with_genres: string,
  vote_average: {
    [VoteAvrg.lte]: number,
    [VoteAvrg.gte]: number,
  },
};

const FiltersBlock = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <>
      <MultiSelect data={selectOptions} value={value} onChange={setValue} />
      <YearPickerInput
        label="Release year"
        placeholder="Select release year"
      />
    </>
  );
};

export default FiltersBlock;
