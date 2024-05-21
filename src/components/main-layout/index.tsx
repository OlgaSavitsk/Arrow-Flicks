import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import PageLayout from '@components/page-layout';
import classes from './index.module.css';
import NavbarComponent from './navbar';

type MainLayoutProps = {
  children: React.ReactElement
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      navbar={{
        width: 280,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Navbar>
        <Group px="md" className={classes.dropdown}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>

        <NavbarComponent />
      </AppShell.Navbar>

      <AppShell.Main bg="var(--mantine-color-gray-1)">
        <Group px="md" className={classes.dropdown}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
        <PageLayout>
          {children}
        </PageLayout>
      </AppShell.Main>

    </AppShell>
  );
};

export default MainLayout;
