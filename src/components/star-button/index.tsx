import { ActionIcon, Flex, Text } from '@mantine/core';
import { defaultStarColor } from '@constants/index';
import IconStar from '@components/icon-star';
import { FavoriteInfo } from '@typing/favorite.type';

import classes from './index.module.css';

type IconStarButtonProps = {
  open: () => void;
  targetFavoriteMovie?: FavoriteInfo;
};

const IconStarButton: React.FC<IconStarButtonProps> = ({
  targetFavoriteMovie,
  open,
}) => {
  const { rating } = { ...targetFavoriteMovie };
  const setColor = rating ? 'var(--mantine-color-purple-4)' : defaultStarColor;

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
      {rating && (
        <Text fw={600} className={classes['rating-text']}>
          {rating}
        </Text>
      )}
    </Flex>
  );
};

export default IconStarButton;
