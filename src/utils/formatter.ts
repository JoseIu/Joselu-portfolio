export const formatter = (value: Date): string => {
  const date = new Date(value);

  return Intl.DateTimeFormat('es-Es', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(date);
};
