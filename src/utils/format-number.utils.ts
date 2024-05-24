export const formatNumber = (number: number) => new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short',
}).format(number);

export const formatCurrency = (number: number) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
}).format(number);
