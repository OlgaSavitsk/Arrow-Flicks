import { Button } from '@mantine/core';

export default Button.extend({
  vars: () => ({
    root: {
      '--button-bg': 'var(--mantine-color-purple-4)',
      '--button-hover': 'var(--mantine-color-purple-3)',
    },
  }),
});
