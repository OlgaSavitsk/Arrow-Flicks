import { ComboboxItem } from '@mantine/core';
import { SortParams } from '@typing/index';

export const selectOptions: ComboboxItem[] = [
  {
    value: SortParams.popularityDesc,
    label: 'Most Popular',
  },
  {
    value: SortParams.popularityAsc,
    label: 'Least Popular',
  },
  {
    value: SortParams.voteAverageDesc,
    label: 'Most Rated',
  },
  {
    value: SortParams.voteAverageAsc,
    label: 'Least Rated',
  },
  {
    value: SortParams.voteCountDesc,
    label: 'Most Voted',
  },
  {
    value: SortParams.voteCountAsc,
    label: 'Least Voted',
  },
];
