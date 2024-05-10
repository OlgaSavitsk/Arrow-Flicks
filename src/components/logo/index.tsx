import { RoutePath } from '@constants/index';
import NextLink from 'next/link';
import { Image } from '@mantine/core';

const Logo = () => (
  <NextLink type="router" href={RoutePath.Home}>
    <Image src="../icons/logo.svg" />
  </NextLink>
);

export default Logo;
