import { NumberInput } from '@mantine/core';

import classes from './index.module.css';

export default NumberInput.extend({
  vars: () => ({
    controls: {
      '--ni-chevron-size': '13px',
    },
  }),
  classNames: classes,
});
