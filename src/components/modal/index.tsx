import { useState } from 'react';
import {
  Button, Flex, Modal, Rating, Stack, Text
} from '@mantine/core';
import { useFavoriteState } from '@hooks/index';
import { FavoriteInfo, MovieDetails, Result } from '@typing/index';

type MovieProps = {
  movie: Result | MovieDetails
  opened: boolean,
  close: () => void
};

export const ModalComponent: React.FC<MovieProps> = ({
  movie,
  opened,
  close,
}) => {
  const { getFavoriteMovie, handleSaveFavorites, onRemoveFavorites } = useFavoriteState();
  const [payload, setPayload] = useState<FavoriteInfo>({
    ...movie,
    rating: getFavoriteMovie(movie.id)?.rating || 0,
  });

  const onSave = () => {
    if (payload.rating) {
      handleSaveFavorites(payload);
      close();
    }
  };

  const onRemove = () => {
    setPayload({ ...payload, rating: 0 });
    onRemoveFavorites(movie.id);
    close();
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Your rating"
      centered
      size="sm"
      overlayProps={{
        backgroundOpacity: 0.3,
      }}
      closeButtonProps={{ size: 'sm', c: 'gray.5' }}
      styles={{
        header: {
          borderBottom: '1px solid var(--mantine-color-gray-2)',
          marginBottom: 'var(--mantine-spacing-md)',
        },
      }}
    >
      <Stack gap="md">
        <Text fw={700}>{movie.original_title}</Text>
        <Rating
          count={10}
          size="lg"
          value={payload.rating}
          onChange={(value: number) => setPayload({ ...payload, rating: value })}
          styles={{
            root: {
              width: '100%',
              justifyContent: 'space-between',
            },
          }}
        />
        <Flex gap="md">
          <Button h={40} size="sm" onClick={onSave} disabled={!payload.rating}>Save</Button>
          <Button
            variant="transparent"
            color="purple.4"
            fw={500}
            size="sm"
            onClick={onRemove}
          >
            Remove rating
          </Button>
        </Flex>
      </Stack>
    </Modal>
  );
};

export default ModalComponent;
