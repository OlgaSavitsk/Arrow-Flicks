import { NextApiRequest, NextApiResponse } from 'next';
import { HttpStatusCode } from '@constants/index';
import { fetchData } from '@services/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { API_KEY } = process.env;
  const { id } = req.query;
  const response = await fetchData(`/movie/${id}`, {
    api_key: `${API_KEY}`,
    append_to_response: 'videos',
  });
  res.status(HttpStatusCode.OK).json(response);
}
