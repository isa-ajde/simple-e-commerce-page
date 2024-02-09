export const formatPrice = (number) => {
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)

  return numberFormat
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((dat) => dat[type])
  if ((type = 'colors')) {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
