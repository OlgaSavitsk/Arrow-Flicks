import { useEffect, useState } from 'react';
import {
  Card, Flex, Image, Stack, Text, Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import dayjs from 'dayjs';
import NextLink from 'next/link';

import { Result } from '@typing/index';
import { RoutePath, dateFormat } from '@constants/index';
import { movieApi } from '@services/index';
import IconStarButton from '@components/star-button';
import IconStar from '@components/icon-star';
import { ModalComponent } from '@components/modal';
import { formatNumber, getGenresName, isValueResponse } from '@utils/index';
import { useAppContext, useFavoriteState } from '@hooks/index';

type MovieProps = {
  movie: Result
};

export const Movie: React.FC<MovieProps> = ({ movie }) => {
  const { state: { genres } } = useAppContext();
  const [sourceUrl, setSourceUrl] = useState('');
  const [opened, { open, close }] = useDisclosure(false);
  const { getFavoriteMovie } = useFavoriteState();

  const targetFavoriteMovie = getFavoriteMovie(movie.id);

  useEffect(() => {
    const fetch = async () => {
      const response = await movieApi.getMovieImage({ posterPath: movie.poster_path });
      const { url } = response.data;
      setSourceUrl(url);
    };
    fetch();
  }, []);

  return (
    <>
      <Card
        p={{ base: 10, md: 20, lg: 24 }}
        h={{ base: 'auto', sm: 218 }}
        radius={12}
      >
        <Flex gap="md" h="100%">
          <Image
            src={sourceUrl}
            fallbackSrc="../icons/empty.svg"
            w={{ base: 110, xs: 119 }}
            alt={movie.original_title}
          />
          <Stack h="100%" w="100%" justify="space-between">
            <Flex direction="row" justify="space-between" gap={8}>
              <NextLink
                type="router"
                href={`${RoutePath.Home}${movie.id}`}
                passHref
                style={{ textDecoration: 'none', color: 'inherit' }}
              >

                <Stack gap={8}>
                  <Title order={3} fz={{ base: 16, sm: 20 }} c="purple.4">
                    {movie.original_title}
                  </Title>

                  {isValueResponse(movie.release_date) && (
                    <Text c="gray.6">
                      {dayjs(movie.release_date).format(dateFormat)}
                    </Text>
                  )}

                  {isValueResponse(movie.vote_count) && (
                    <Flex direction="row" align="center" gap={8}>
                      <IconStar color="#FAB005" ratingValue={movie.vote_average} />

                      <Text c="dimmed">
                        {`(${formatNumber(movie.vote_count)})`}
                      </Text>

                    </Flex>
                  )}
                </Stack>
              </NextLink>
              <IconStarButton open={open} targetFavoriteMovie={targetFavoriteMovie} />
            </Flex>

            <Flex gap={{ base: 0, xs: 8 }} direction={{ base: 'column', xs: 'row' }}>
              <Text c="dimmed">
                Genres
              </Text>
              <Text lineClamp={1}>
                {isValueResponse(movie.genre_ids) && getGenresName(movie.genre_ids, genres).join(', ')}
              </Text>
            </Flex>

          </Stack>
        </Flex>
      </Card>
      {opened && <ModalComponent movie={movie} opened={opened} close={close} />}
    </>
  );
};

export default Movie;
