import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Pagination, Group } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { MovieRequestParams } from '@typing/index';
import { controlStep, favoritePerPage, initTotalPage } from '@constants/index';
import { useAppContext } from '@hooks/index';
import { favoriteInitPages, movieInitPages } from './helper';

type PaginationComponentProps = {
  pagesCount?: number,
  isFavorite?: boolean,
  form?: UseFormReturnType<Partial<MovieRequestParams>>,
  setPageIndex?: (pageIndex: number) => void,
};

type PaginateControl = 'first' | 'previous' | 'last' | 'next';

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  form,
  isFavorite,
  pagesCount,
  setPageIndex,
}) => {
  const [activePage, setPagination] = useState(1);
  const { state: { params, favorites } } = useAppContext();

  if (!pagesCount) {
    return null
  }

  const onPageChangeHandler = useCallback((currentPage: number) => {
    setPagination(currentPage);
    if (setPageIndex) {
      setPageIndex(currentPage);
    }
    if (form) {
      form.setValues({ ...params, page: currentPage });
    }
  }, [form, params, setPageIndex]);

  const initTotalPages = useMemo(() => (isFavorite
    ? favoriteInitPages(pagesCount)
    : movieInitPages(pagesCount)), [isFavorite, pagesCount]);

  const totalPages = useMemo(() => (
    activePage >= initTotalPage ? activePage + controlStep : initTotalPages
  ), [activePage, initTotalPages]);

  const renderCustomStyle = (pageIndex: number) => ({
    disabled: pageIndex - controlStep === pagesCount,
    style: {
      display:
        (pageIndex === initTotalPage && activePage < initTotalPage)
          || pageIndex === activePage
          || pageIndex === activePage + controlStep
          || pageIndex === activePage - controlStep ? 'block' : 'none',
    },
  });

  const renderConrolCustomStyle = (control: PaginateControl) => {
    if (control === 'next' && activePage === pagesCount) {
      return { disabled: true };
    }
    return {};
  };

  const renderPagination = useCallback(() => (
    <Pagination
      radius="sm"
      color="purple.4"
      total={totalPages}
      value={activePage}
      onChange={onPageChangeHandler}
      getItemProps={renderCustomStyle}
      getControlProps={renderConrolCustomStyle}
      styles={{
        dots: {
          display: 'none',
        },
      }}
    />
  ), [activePage, onPageChangeHandler, pagesCount, totalPages]);

  useEffect(() => {
    if (favorites.length && favorites.length === (activePage - 1) * favoritePerPage) {
      setPagination((prev) => prev - controlStep);
      if (setPageIndex) {
        setPageIndex(activePage - controlStep);
      }
    }
  }, [activePage, favorites.length]);

  return (
    <Group justify={isFavorite ? "center" : "flex-end"}>
      {renderPagination()}
    </Group>
  );
};

export default PaginationComponent;
