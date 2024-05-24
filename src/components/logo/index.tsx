import NextLink from 'next/link';
import { Image } from '@mantine/core';
import { RoutePath } from '@constants/index';

const Logo = () => (
  <NextLink type="router" href={RoutePath.Home}>
    <Image src="../icons/logo.svg" alt="logo" />
  </NextLink>
);

export default Logo;
