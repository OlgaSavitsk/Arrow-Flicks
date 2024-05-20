import { useCallback, useState } from 'react';
import { ActionIcon } from '@mantine/core';
import { defaultStarColor } from '@constants/index';
import IconStar from '@components/icon-star';

const IconStarButton: React.FC = () => {
  const [isColor, setIsColor] = useState<boolean>(false);

  const handleSetColor = useCallback(() => {
    setIsColor(!isColor);
  }, [isColor]);

  const setColor = isColor ? 'var(--mantine-color-purple-4)' : defaultStarColor;

  return (
    <ActionIcon
      variant="transparent"
      onClick={handleSetColor}
      styles={{
        icon: {
          alignItems: 'flex-start',
        },
      }}
    >
      <IconStar color={setColor} />
    </ActionIcon>

  );
};

export default IconStarButton;
