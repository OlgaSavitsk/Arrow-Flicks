import EmptyStateComponent from '@components/epmpty-state';
import SearchComponent from '@components/search';
import { EmptyState } from '@constants/movie';
import { RoutePath } from '@constants/routes.constants';
import { useAppContext } from '@hooks/index';
import {
  Group, Stack, Title, em,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { isArrayWithItems } from '@utils/index';
import { useRouter } from 'next/router';

type PageLayoutProps = {
  children: React.ReactElement
};

const titleItems = {
  [RoutePath.Home]: {
    title: 'Movies',
    action: null,
  },
  [RoutePath.Rated]: {
    title: 'Rated movies',
    action: <SearchComponent />,
  },
  [RoutePath.Details]: null,
  [RoutePath.NotFound]: null,
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { state: { favorites } } = useAppContext();
  const { route } = useRouter();
  const isTablet = useMediaQuery(`(max-width: ${em(1370)})`);

  const { title, action } = titleItems[route as RoutePath] || {};

  const isFavoritesEmpty = !isArrayWithItems(favorites) && route === RoutePath.Rated;

  return (
    isFavoritesEmpty
      ? <EmptyStateComponent status={EmptyState.EmptyRate} width={400} />
      : (
        <Stack pt={40} px={isTablet ? 20 : 90} gap={40}>
          <Group justify="space-between">
            <Title fz={32} fw={700}>{title}</Title>
            {action}
          </Group>

          {children}

        </Stack>
      )
  );
};

export default PageLayout;
