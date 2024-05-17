import { Flex, NumberInput } from '@mantine/core';

import classes from './index.module.css';

const RatingComponent = () => (
  <Flex direction="row" align="flex-end" gap="xs">
    <NumberInput
      label="Ratings"
      placeholder="From"
      min={0}
      step={0.1}
      size="md"
      classNames={{ controls: classes.controls }}
    />

    <NumberInput
      placeholder="To"
      min={0}
      step={0.1}
      size="md"
      classNames={{ controls: classes.controls }}
    />
  </Flex>
);

export default RatingComponent;
