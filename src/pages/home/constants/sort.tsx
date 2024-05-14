import { ComboboxItem } from '@mantine/core';
import { SortParams } from '@typing/index';

export const selectOptions: ComboboxItem[] = [
  {
    value: SortParams.popularityAsc,
    label: 'Most Popular',
  },
  {
    value: SortParams.popularityDesc,
    label: 'Least Popular',
  },
  {
    value: SortParams.voteAverageAsc,
    label: 'Most Rated',
  },
  {
    value: SortParams.voteAverageDesc,
    label: 'Least Rated',
  },
  {
    value: SortParams.voteCountAsc,
    label: 'Most Voted',
  },
  {
    value: SortParams.voteCountDesc,
    label: 'Least Voted',
  },
];
