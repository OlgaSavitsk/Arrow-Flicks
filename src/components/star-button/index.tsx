import { ActionIcon, Flex, Text } from '@mantine/core';
import { defaultStarColor } from '@constants/index';
import IconStar from '@components/icon-star';

import classes from './index.module.css';

type IconStarButtonProps = {
  open: () => void;
  targetFavoriteMovie?: number;
};

const IconStarButton: React.FC<IconStarButtonProps> = ({
  targetFavoriteMovie,
  open,
}) => {
  const setColor = targetFavoriteMovie ? 'var(--mantine-color-purple-4)' : defaultStarColor;

  return (
    <Flex gap={4}>
      <ActionIcon
        variant="transparent"
        onClick={open}
        styles={{
          icon: {
            alignItems: 'flex-start',
          },
        }}
      >
        <IconStar color={setColor} />
      </ActionIcon>
      {targetFavoriteMovie && (
        <Text fw={600} className={classes['rating-text']}>
          {targetFavoriteMovie}
        </Text>
      )}
    </Flex>
  );
};

export default IconStarButton;
