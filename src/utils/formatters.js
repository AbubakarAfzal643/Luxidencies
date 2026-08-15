export const formatCurrency = (amount, currency = 'PKR') =>
  new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)

export const formatGuestsLabel = (count) =>
  `${count} guest${count > 1 ? 's' : ''}`
