import '@mantine/dates/styles.css';

import { createTheme } from '@mantine/core';

import {
  ButtonTheme,
  ComboboxTheme,
  InputTheme,
  InputWrapperTheme,
  NumberInputTheme,
  TextTheme,
} from './components';
import classes from './index.module.css';

const customTheme = createTheme({
  fontFamily: 'Inter, sans-serif',
  headings: {
    sizes: {
      h3: {
        fontSize: '1.25rem',
        lineHeight: '1.1',
        fontWeight: '600',
      },
    },
  },
  primaryColor: 'purple',
  colors: {
    purple: [
      '#F2ECFA',
      '#E5D5FA',
      '#D1B4F8',
      '#BD93F7',
      '#9854F6',
      '#541F9D',
      '#4b1c8d',
      '#31125b',
      '#1f0c3b',
      '#0e051a',
    ],
    gray: [
      '#D1B4F8',
      '#F5F5F6',
      '#EAEBED',
      '#D5D6DC',
      '#cacdd3',
      '#ACADB9',
      '#7B7C88',
      '#71727e',
      '#686974',
      '#3a3a40',
    ],
  },
  defaultRadius: 'var(--mantine-radius-md)',
  activeClassName: classes.active,
  components: {
    Button: ButtonTheme,
    Input: InputTheme,
    InputWrapper: InputWrapperTheme,
    Select: ComboboxTheme,
    NumberInput: NumberInputTheme,
    Text: TextTheme,
  },
});

export default customTheme;
