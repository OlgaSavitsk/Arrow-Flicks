import { NumberInput } from '@mantine/core';

export default NumberInput.extend({
  vars: () => ({
    controls: {
      '--ni-chevron-size': '13px',
    },
  }),
});
