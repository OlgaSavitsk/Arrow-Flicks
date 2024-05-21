import { EmptyState } from '@constants/index';

export const emptyContext = {
  [EmptyState.EmptyMovie]: {
    src: '../icons/not-found.svg',
    title: 'We don\'t have such movies, look for another one',
    button: '',
  },
  [EmptyState.NotFound]: {
    src: '../icons/404.svg',
    title: 'We can\'t find the page you are looking for',
    button: 'Go Home',
  },
  [EmptyState.EmptyRate]: {
    src: '../icons/empty-rate.svg"',
    title: 'You haven\'t rated any films yet',
    button: 'Find movies',
  },
};
