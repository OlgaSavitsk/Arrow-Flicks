export enum SortParams {
  popularityAsc = 'popularity.asc',
  popularityDesc = 'popularity.desc',
  voteAverageAsc = 'vote_average.asc',
  voteAverageDesc = 'vote_average.desc',
  voteCountAsc = 'vote_count.asc',
  voteCountDesc = 'vote_count.desc',
}

export enum VoteAvrg {
  lte = 'vote_average.lte',
  gte = 'vote_average.gte',
}

export type MovieRequestParams = {
  language: string,
  page: number,
  with_genres: string | null,
  primary_release_year: Date | null,
  vote_average: VoteAverage,
  sort_by: string | null,
};

export type VoteAverage = {
  gte: string | null,
  lte: string | null,
};

export type MovieResponse = {
  page: number,
  results: Array<Result>,
  total_pages: number,
  total_results: number
};

export type Result = {
  id: number,
  original_title: string,
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
  genre_ids: Array<number>
};

export type GenreListResponse = {
  genres: Array<Genre>
};

export type Genre = {
  id: number,
  name: string,
};

export type MovieDetails = {
  original_title: string,
  poster_path: string,
  release_date: string,
  vote_average: number,
  vote_count: number,
  runtime: number,
  budget: number,
  revenue: number,
  genres: Array<Genre>,
  overview: string,
  production_companies: Array<Company>
  videos: VideoResults
};

type VideoResults = {
  results: Array<{ key: string }>
};

type Company = {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
};
