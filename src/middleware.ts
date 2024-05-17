import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { HttpStatusCode } from './constants';
import { SortParams, VoteAvrg } from './typing';

const queryParamsSchema = z.object({
  language: z.string().default('en-US'),
  page: z.number().default(1),
  with_genres: z.string().optional(),
  primary_release_year: z.number().optional(),
  vote_average: z
    .object({
      [VoteAvrg.lte]: z.number().lte(10).optional(),
      [VoteAvrg.gte]: z.number().lte(10).optional(),
    })
    .optional(),
  sort_by: z.nativeEnum(SortParams).optional(),
});

export default function middleware(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const validation = queryParamsSchema.safeParse(searchParams);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), {
      status: HttpStatusCode.BAD_REQUEST,
    });
  }
  NextResponse.json(validation.data);
  return NextResponse.next();
}
