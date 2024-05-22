import { useCallback, useMemo, useState } from 'react';

import { Pagination, Group } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { MovieRequestParams } from '@typing/movie.types';
import { initTotalPage } from '@constants/movie';
import { useAppContext } from '@hooks/index';

interface PaginationComponentProps {
  form: UseFormReturnType<Partial<MovieRequestParams>>,
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ form }) => {
  const [activePage, setPagination] = useState(1);
  const { state: { params } } = useAppContext();

  const onPageChangeHandler = useCallback((currentPage: number) => {
    setPagination(currentPage);

    form.setValues({ ...params, page: currentPage });
  }, [form, params]);

  const totalPages = useMemo(() => (
    activePage >= initTotalPage ? activePage + 1 : initTotalPage
  ), [activePage]);

  const renderPagination = useCallback(() => (
    <Pagination
      radius="sm"
      color="purple.4"
      total={totalPages}
      value={activePage}
      onChange={onPageChangeHandler}
      getItemProps={(pageIndex: any) => ({
        style: {
          display:
          (pageIndex === initTotalPage && activePage < initTotalPage)
          || pageIndex === activePage
          || pageIndex === activePage + 1
          || pageIndex === activePage - 1 ? 'block' : 'none',
        },
      })}
      styles={{
        dots: {
          display: 'none',
        },
      }}
    />
  ), [activePage, onPageChangeHandler, totalPages]);

  return (
    <Group justify="flex-end">
      {renderPagination()}
    </Group>
  );
};

export default PaginationComponent;
