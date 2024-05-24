import { NextApiRequest, NextApiResponse } from 'next';
import { HttpStatusCode } from '@constants/index';
import { fetchData } from '@services/index';

export default async function handler(request: NextApiRequest, res: NextApiResponse) {
  const { API_KEY } = process.env;
  const { params } = request.body;
  const response = await fetchData('/genre/movie/list', {
    ...params,
    api_key: `${API_KEY}`,
    language: 'en-US',
  });
  res.status(HttpStatusCode.OK).json(response);
}
