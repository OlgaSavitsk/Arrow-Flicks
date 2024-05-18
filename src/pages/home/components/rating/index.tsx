import { Flex, NumberInput } from '@mantine/core';

import { UseFormReturnType } from '@mantine/form';
import { MovieRequestParams } from '@typing/index';
import classes from './index.module.css';

type RatingComponentProps = {
  form: UseFormReturnType<Partial<MovieRequestParams>>
};

const RatingComponent: React.FC<RatingComponentProps> = ({ form }) => (
  <Flex direction="row" align="flex-end" gap="xs">
    <NumberInput
      label="Ratings"
      placeholder="From"
      min={0}
      step={0.1}
      size="md"
      classNames={{ controls: classes.controls }}
      {...form.getInputProps('vote_average.gte')}
    />

    <NumberInput
      placeholder="To"
      min={0}
      step={0.1}
      size="md"
      classNames={{ controls: classes.controls }}
      {...form.getInputProps('vote_average.lte')}
    />
  </Flex>
);

export default RatingComponent;
