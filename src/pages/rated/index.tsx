import { useState } from 'react';
import { SimpleGrid } from '@mantine/core';
import { NextPage } from 'next';
import { renderMovies } from '@components/movies';
import { useAppContext } from '@hooks/index';
import PaginationComponent from '@components/pagination';
import { EmptyState, favoritePerPage } from '@constants/movie';
import { splitData } from '@utils/split-data.utils';
import EmptyStateComponent from '@components/epmpty-state';

const RatedPage: NextPage = () => {
  const { state: { favorites } } = useAppContext();
  const [pageIndex, setPageIndex] = useState(1);

  const data = splitData(favorites, favoritePerPage);
  const dataPerPage = data[pageIndex - 1];

  return (
    favorites.length
      ? (
        <>
          <SimpleGrid
            cols={{ base: 1, md: 1, lg: 2 }}
          >
            {renderMovies({ results: dataPerPage })}
          </SimpleGrid>
          <PaginationComponent
            isFavorite
            pagesCount={data.length}
            setPageIndex={setPageIndex}
          />
        </>
      )
      : <EmptyStateComponent status={EmptyState.EmptyRate} width={400} />

  );
};

export default RatedPage;
