import {
  Stack, Title, Image, Button, em,
} from '@mantine/core';
import { RoutePath, EmptyState } from '@constants/index';
import { useMediaQuery } from '@mantine/hooks';
import router from 'next/router';
import { emptyContext } from './empty.helper';

type NotFoundComponentProps = {
  status: EmptyState
};

const EmptyStateComponent: React.FC<NotFoundComponentProps> = ({ status }) => {
  const isTablet = useMediaQuery(`(max-width: ${em(700)})`);

  const isNotFound = status === EmptyState.NotFound;

  const handleClick = () => {
    router.push(RoutePath.Home);
  };
  const { src, title, button } = emptyContext[status];

  return (
    <Stack gap={isNotFound ? 48 : 16} h="90%" align="center" justify="center">

      {isNotFound
        ? <Image h={196} w={isTablet ? 300 : 656} src={src} />
        : <Image h={252} w={310} src={src} />}

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
