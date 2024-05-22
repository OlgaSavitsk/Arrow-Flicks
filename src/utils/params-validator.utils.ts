import { VoteAverage } from '@typing/index';

export const rateFilterValidator = (value: VoteAverage | undefined) => {
  const { gte, lte } = { ...value };
  if (!gte && !lte) {
    return null;
  }
  if (Number(gte) > 10 || Number(lte) > 10) {
    return 'Value must be less than or equal to 10';
  }
  return Number(gte) > Number(lte) && lte
    ? 'The value From must be less than the value To'
    : null;
};
