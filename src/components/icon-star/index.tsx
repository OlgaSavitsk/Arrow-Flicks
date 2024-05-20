import {
  Group, Text, em, rem,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { defaultStarColor } from '@constants/index';

interface IconStarProps {
  color: string;
  rateValue?: number
}

const IconStar = ({ color = defaultStarColor, rateValue }: IconStarProps) => {
  const isMobile = useMediaQuery(`(max-width: ${em(480)})`);
  const size = isMobile ? rem(20) : rem(28);

  return (
    <Group gap={4}>
      <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size, height: size }}
      >
        <path
          d="M14 20.7083L6.79929 24.4941L8.17479 16.4756L2.34146 10.7974L10.3915 9.63078L13.9918 2.33561L17.5921 9.63078L25.6421 10.7974L19.8088 16.4756L21.1843 24.4941L14 20.7083Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {rateValue && (
        <Text fw={600}>
          {rateValue.toFixed(1)}
        </Text>
      )}
    </Group>
  );
};

export default IconStar;
