import { NextApiRequest, NextApiResponse } from 'next';

import { fetchData } from '@services/index';
import { HttpStatusCode } from '@constants/index';
import { z } from 'zod';
import { SortParams, VoteAvrg } from '@typing/index';

const queryParamsSchema = z.object({
  page: z.string().default('1').transform(Number),
  with_genres: z.string().optional(),
  primary_release_year: z.number().optional(),
  [VoteAvrg.gte]: z.coerce.number().max(10).optional(),
  [VoteAvrg.lte]: z.coerce.number().max(10).optional(),
  sort_by: z.nativeEnum(SortParams).optional(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { API_KEY } = process.env;
  const params = req.query;
  const validation = queryParamsSchema.safeParse(params);
  if (!validation.success) {
    res.status(HttpStatusCode.BAD_REQUEST).json(validation.error.format());
  }
  const response = await fetchData('/discover/movie', {
    ...params,
    api_key: `${API_KEY}`,
  });
  res.status(HttpStatusCode.OK).json(response);
}
