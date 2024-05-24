import { useMemo, useState } from 'react';
import { SimpleGrid } from '@mantine/core';
import { NextPage } from 'next';
import { renderMovies } from '@components/movies';
import { useAppContext } from '@hooks/index';
import { PaginationComponent, LoaderComponent, EmptyStateComponent } from '@components/index';
import { EmptyState, favoritePerPage } from '@constants/index';
import { isArrayWithItems, splitData } from '@utils/index';
import { setSearchedValue } from '@components/search/helper';

const RatedPage: NextPage = () => {
  const { state: { favorites, keyWord, isLoading } } = useAppContext();
  const [pageIndex, setPageIndex] = useState(1);

  const searchedValue = useMemo(() => setSearchedValue(favorites, keyWord), [favorites, keyWord]);
  const data = useMemo(
    () => (
      keyWord ? searchedValue : favorites),
    [favorites, keyWord, searchedValue],
  );
  const splitedData = splitData(data, favoritePerPage);
  const index = keyWord ? 1 : pageIndex;
  const dataPerPage = splitedData[index - 1];

  return (
    isArrayWithItems(data)
      ? (
        <>
          <SimpleGrid
            cols={{ base: 1, md: 1, lg: 2 }}
            pos="relative"
          >
            {renderMovies({ results: dataPerPage })}
            <LoaderComponent isLoading={isLoading} />
          </SimpleGrid>
          <PaginationComponent
            isFavorite
            pagesCount={splitedData.length}
            setPageIndex={setPageIndex}
          />
        </>
      )
      : (
        <EmptyStateComponent
          status={keyWord ? EmptyState.EmptyMovie : EmptyState.EmptyRate}
          width={400}
          height={252}
        />
      )
  );
};

export default RatedPage;
