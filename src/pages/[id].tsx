import { useEffect, useMemo } from 'react';
import { Movie } from '@components/movies/components/movie';
import { RoutePath } from '@constants/routes.constants';
import { useAppContext } from '@hooks/index';
import {
  Anchor, AspectRatio,
  Breadcrumbs, Card,
  Divider,
  em,
  Grid, GridCol, Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { usePathname } from 'next/navigation';

const MovieDetailsPage: React.FC = () => {
  const pathname = usePathname();
  const { fetchDetails, state: { details } } = useAppContext();
  const isTablet = useMediaQuery(`(max-width: ${em(1200)})`);

  const { original_title, videos } = { ...details };

  const path = pathname ?? RoutePath.Home;

  const movieId = useMemo(() => (
    path.split('/').find((i) => i)
  ), [path]);

  const pathSnippets = useMemo(() => (
    path.split('/').filter((i) => i)
  ), [path]);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

    return (
      <Anchor href={url} key={url} c="purple.4">
        {original_title}
      </Anchor>
    );
  });

  const breadcrumbItems = [
    <Anchor key={movieId} href={RoutePath.Home} c="purple.4">Movies</Anchor>,
  ].concat(extraBreadcrumbItems);

  useEffect(() => {
    if (movieId) {
      fetchDetails(movieId);
    }
  }, [movieId]);

  return (
    <SimpleGrid
      cols={{ base: 1, md: 1 }}
      px={isTablet ? 0 : 90}
      my={-40}
    >
      <Breadcrumbs>{breadcrumbItems}</Breadcrumbs>
      {details && <Movie movie={details} height={400} width={250} isDetails />}
      <Card
        p={{ base: 10, md: 20, lg: 24 }}
        radius={12}
      >
        <Stack gap={0}>
          <Stack>
            <Title order={3} fz={{ base: 16, sm: 20 }} fw={700}>
              Trailer
            </Title>

            {videos && (
              <AspectRatio ratio={16 / 9} maw={500}>
                <iframe
                  src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                  title="Movie video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    border: '4px solid var(--mantine-color-gray-1)',
                    borderRadius: '9px',
                  }}
                />
              </AspectRatio>
            )}
          </Stack>

          <Divider my={{ base: 'sm', md: 'lg' }} p={0} />

          <Stack>
            <Title order={3} fz={{ base: 16, sm: 20 }} fw={700}>
              Description
            </Title>
            <Text maw={725}>{details?.overview}</Text>

            <Divider my={{ base: 'sm', md: 'lg' }} p={0} />
          </Stack>

          <Stack>
            <Title order={3} fz={{ base: 16, sm: 20 }} fw={700}>
              Production
            </Title>
            {details?.production_companies.map((company) => (
              <Grid justify="flex-start" align="center">
                <GridCol span="content">
                  <Image
                    w={40}
                    h={40}
                    fit="contain"
                    src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                    style={{
                      border: '1px solid var(--mantine-color-gray-1)',
                      borderRadius: '100%',
                    }}
                  />
                </GridCol>
                <GridCol span={11}>
                  <Text fw={700}>{company.name}</Text>
                </GridCol>
              </Grid>
            ))}
          </Stack>
        </Stack>

      </Card>
    </SimpleGrid>
  );
};

export default MovieDetailsPage;
