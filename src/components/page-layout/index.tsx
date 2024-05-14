import SearchComponent from '@components/search';
import { RoutePath } from '@constants/routes.constants';
import {
  Group, SimpleGrid, Stack, Title,
} from '@mantine/core';
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
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { route } = useRouter();

  const { title, action } = titleItems[route as RoutePath];

  return (
    <Stack pt={40} px={{ base: 20, md: 90 }} gap={40}>
      <Group justify="space-between">
        <Title fz={32} fw={700}>{title}</Title>
        {action}
      </Group>
      <SimpleGrid
        cols={{ base: 1, sm: 1, lg: 2 }}
      >
        {children}
      </SimpleGrid>
    </Stack>
  );
};

export default PageLayout;
