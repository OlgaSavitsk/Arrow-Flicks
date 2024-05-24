import { Button } from '@mantine/core';

import classes from './index.module.css';

export default Button.extend({
  styles: (_theme, props) => {
    if (props.variant === 'transparent') {
      return {
        root: {
          background: 'transparent',
          fontSize: 'var(--mantine-font-size-sm)',
          padding: 0,
        },
      };
    }
    return { root: {} };
  },
  vars: (_theme, props) => {
    if (props.variant === 'transparent') {
      return {
        root: {
          '--button-hover': 'transparent',
          '--button-hover-color': 'var(--mantine-color-purple-3)',
        },
      };
    }
    return {
      root: {
        '--button-bg': 'var(--mantine-color-purple-4)',
        '--button-hover': 'var(--mantine-color-purple-3)',
      },
    };
  },
  classNames: classes,
});
