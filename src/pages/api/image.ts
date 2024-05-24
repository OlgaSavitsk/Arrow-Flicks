import { NextApiRequest, NextApiResponse } from 'next';

import { HttpStatusCode } from '@constants/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { posterPath } = req.query;
  const url = `${process.env.IMAGE_PATH}${posterPath}`;
  res.status(HttpStatusCode.OK).json({ url });
}
