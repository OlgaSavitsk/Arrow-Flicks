import { Flex, Group } from '@mantine/core';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '@components/logo';
import { MenuItems } from './config/menu-items';
import classes from './index.module.css';

const NavbarComponent = () => {
  const { route } = useRouter();
  const [active, setActive] = useState(route);

  const links = MenuItems.map((item) => (
    <Link
      href={item.link}
      key={item.label}
      data-active={item.link === active || undefined}
      className={classes.link}
      onClick={() => setActive(item.link)}
    >
      {item.label}
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <Group
        className={classes.header}
        justify="space-between"
      >

        <Logo />

      </Group>
      <Flex
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="column"
      >
        {links}
      </Flex>
    </nav>
  );
};

export default NavbarComponent;
