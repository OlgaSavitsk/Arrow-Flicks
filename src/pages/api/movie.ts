import { NextApiRequest, NextApiResponse } from 'next';

import { fetchData } from '@services/index';
import { HttpStatusCode } from '@constants/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { API_KEY } = process.env;
  const { params } = req.body;
  const response = await fetchData(
    `/discover/movie?api_key=${API_KEY}`,
    params,
  );
  res.status(HttpStatusCode.OK).json(response);
}