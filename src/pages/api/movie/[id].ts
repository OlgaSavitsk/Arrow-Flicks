import { NextApiRequest, NextApiResponse } from 'next';

import { fetchData } from '@services/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { API_KEY } = process.env;
  const { id } = req.query;
  const response = await fetchData(
    `/movie/${id}?api_key=${API_KEY}`,
  );
  res.status(200).json(response);
}
