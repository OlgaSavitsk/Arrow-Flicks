import SearchComponent from '@components/search';
import { RoutePath } from '@constants/routes.constants';
import {
  Group, Stack, Title, em,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
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
  const isTablet = useMediaQuery(`(max-width: ${em(1370)})`);

  const { title, action } = titleItems[route as RoutePath];

  return (
    <Stack pt={40} px={isTablet ? 20 : 90} gap={40}>
      <Group justify="space-between">
        <Title fz={32} fw={700}>{title}</Title>
        {action}
      </Group>

      {children}

    </Stack>
  );
};

export default PageLayout;
