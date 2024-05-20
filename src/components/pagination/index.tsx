import { useCallback, useMemo, useState } from 'react';

import { Pagination, Group } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { MovieRequestParams } from '@typing/movie.types';
import { initTotalPage, maxTotalPage } from '@constants/movie';
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
    activePage >= initTotalPage ? maxTotalPage : initTotalPage
  ), [activePage]);

  const renderPagination = useCallback(() => (
    <Pagination
      radius="sm"
      color="purple.4"
      total={totalPages}
      value={activePage}
      onChange={onPageChangeHandler}
    />
  ), [activePage, onPageChangeHandler, totalPages]);

  return (
    <Group justify="flex-end">
      {renderPagination()}
    </Group>
  );
};

export default PaginationComponent;
