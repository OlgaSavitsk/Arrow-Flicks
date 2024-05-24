import { Flex, NumberInput, Text } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { MovieRequestParams } from '@typing/index';

import classes from './index.module.css';

type RatingComponentProps = {
  form: UseFormReturnType<Partial<MovieRequestParams>>
};

const RatingComponent: React.FC<RatingComponentProps> = ({ form }) => (
  <>
    <Flex className={classes.wrapper} gap="xs">
      <NumberInput
        label="Ratings"
        placeholder="From"
        min={0}
        step={0.1}
        size="md"
        key={form.key('vote_average.gte')}
        classNames={{ controls: classes.controls }}
        {...form.getInputProps('vote_average.gte')}
      />

      <NumberInput
        placeholder="To"
        min={0}
        step={0.1}
        size="md"
        key={form.key('vote_average.lte')}
        classNames={{ controls: classes.controls }}
        {...form.getInputProps('vote_average.lte')}
      />
    </Flex>
    <Text className={classes.error}>{form.errors.vote_average}</Text>
  </>
);

export default RatingComponent;
