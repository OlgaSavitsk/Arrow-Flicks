import { NextApiRequest, NextApiResponse } from 'next';

import { fetchData } from '@services/index';

export default async function handler(request: NextApiRequest, res: NextApiResponse) {
  const { API_KEY } = process.env;
  const { params } = request.body;
  const response = await fetchData(
    `/genre/movie/list?api_key=${API_KEY}`,
    params,
  );
  res.status(200).json(response);
}
