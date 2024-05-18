import { NextApiRequest, NextApiResponse } from 'next';

import { fetchData } from '@services/index';
import { HttpStatusCode } from '@constants/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { API_KEY } = process.env;
  const params = req.query;
  const response = await fetchData('/discover/movie', {
    ...params,
    api_key: `${API_KEY}`,
  });
  res.status(HttpStatusCode.OK).json(response);
}
