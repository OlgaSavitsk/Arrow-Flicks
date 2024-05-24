import { useEffect, useMemo, useState } from 'react';
import NextLink from 'next/link';
import dayjs from 'dayjs';
import { useDisclosure } from '@mantine/hooks';
import {
  Card, Flex, Image, Stack, Text, Title,
} from '@mantine/core';
import { formatNumber, getGenresName, isValueResponse } from '@utils/index';
import { useAppContext, useFavoriteState } from '@hooks/index';
import { dateFormat } from '@constants/index';
import IconStarButton from '@components/star-button';
import IconStar from '@components/icon-star';
import { ModalComponent } from '@components/modal';
import { MovieDetails, Result } from '@typing/index';
import { movieApi } from '@services/index';

import { Description } from './description';

type MovieProps = {
  movie: Result | MovieDetails
  height?: number,
  width?: number,
  isDetails?: boolean,
};

export const Movie: React.FC<MovieProps> = ({
  movie,
  height = 218,
  width = 119,
  isDetails = false,
}) => {
  const { state: { genres } } = useAppContext();
  const [sourceUrl, setSourceUrl] = useState('');
  const [opened, { open, close }] = useDisclosure(false);
  const { getFavoriteMovie } = useFavoriteState();

  const targetFavoriteMovie = getFavoriteMovie(movie.id);

  const movieGenres = useMemo(() => (movie as Result).genre_ids
    || (movie as MovieDetails).genres.map((genre) => genre.id), [movie]);

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
        h={{ base: 'fit-content', xs: height }}
        radius={12}
      >
        <Flex gap="md" h="100%" direction={{ base: 'column', xs: 'row' }}>
          {isDetails ? (
            <Image
              src={sourceUrl}
              fallbackSrc="../icons/empty.svg"
              w={{ base: '100%', xs: width }}
              alt={movie.original_title}
            />
          )
            : (
              <Image
                src={sourceUrl}
                fallbackSrc="../icons/empty.svg"
                w={{ base: '100%', xs: width }}
                alt={movie.original_title}
              />
            )}
          <Stack h="100%" w="100%" justify="space-between">
            <Flex direction="row" justify="space-between" gap={8}>
              <NextLink
                type="router"
                href={`${movie.id}`}
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
              <IconStarButton open={open} targetFavoriteMovie={targetFavoriteMovie?.rating} />
            </Flex>
            {isDetails
              ? (
                <Flex gap={{ base: 0, xs: 10 }} direction={{ base: 'column', xs: 'column' }}>
                  <Description movieGenres={movieGenres} movie={movie as MovieDetails} />
                </Flex>
              )
              : (
                <Flex gap={{ base: 0, xs: 8 }} direction={{ base: 'column', xs: 'row' }}>
                  <Text c="dimmed">
                    Genres
                  </Text>
                  <Text lineClamp={1}>
                    {isValueResponse(movieGenres)
                      && getGenresName(movieGenres, genres).join(', ')}
                  </Text>
                </Flex>
              )}

          </Stack>
        </Flex>
      </Card>
      {opened && <ModalComponent movie={movie} opened={opened} close={close} />}
    </>
  );
};

export default Movie;
