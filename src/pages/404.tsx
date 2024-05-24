import EmptyStateComponent from '@components/epmpty-state';
import Logo from '@components/logo';
import { EmptyState } from '@constants/index';
import {
  Container, Group,
} from '@mantine/core';

const NotFoundPage: React.FC = () => (
  <Container p={24} h="100vh" fluid bg="gray.1">
    <Group>
      <Logo />
    </Group>

    <EmptyStateComponent status={EmptyState.NotFound} width={656} />

  </Container>
);
export default NotFoundPage;
