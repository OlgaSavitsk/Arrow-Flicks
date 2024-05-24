import { initTotalPage, maxTotalPage } from '@constants/index';

export const movieInitPages = (pagesCount: number) => (
  pagesCount > maxTotalPage ? initTotalPage : pagesCount);

export const favoriteInitPages = (pagesCount: number) => (
  pagesCount > initTotalPage ? initTotalPage : pagesCount);
