import { rem } from '@mantine/core';

interface IconChevronProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number | string | undefined;
}

const IconChevron = ({ size, style, ...others }: IconChevronProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: rem(size), height: rem(size), ...style }}
    {...others}
  >
    <path d="M3.33325 6L7.47929 9.55374C7.77888 9.81054 8.22096 9.81054 8.52055 9.55374L12.6666 6" stroke="#ACADB9" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default IconChevron;
