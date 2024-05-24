import { useRouter } from 'next/router';
import {
  Button, em, Image, Stack, Title,
} from '@mantine/core';
import { EmptyState, RoutePath } from '@constants/index';
import { useMediaQuery } from '@mantine/hooks';

import emptyContext from './empty.helper';

type NotFoundComponentProps = {
  status: EmptyState,
  width?: number,
  height?: number,
  justify?: string
};

const EmptyStateComponent: React.FC<NotFoundComponentProps> = ({
  status,
  width = 300,
  height = 196,
  justify = 'center',
}) => {
  const router = useRouter();
  const isTablet = useMediaQuery(`(max-width: ${em(700)})`);

  const isNotFound = status === EmptyState.NotFound;

  const handleClick = () => {
    router.push(RoutePath.Home);
  };
  const { src, title, button } = emptyContext[status];

  return (
    <Stack gap={isNotFound ? 48 : 16} h="90vh" align="center" justify={justify}>

      <Image h={height} w={isTablet ? 300 : width} src={src} />

      <Stack gap="md" align="center" justify="center">
        <Title order={3} fz={{ base: 14, sm: 20 }} ta="center">
          {title}
        </Title>
        {button && (
          <Button
            h={40}
            size="sm"
            onClick={handleClick}
          >
            {button}
          </Button>
        )}
      </Stack>

    </Stack>
  );
};

export default EmptyStateComponent;
