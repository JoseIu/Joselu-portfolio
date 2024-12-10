export const getExperienteMonths = (star: Date, end: Date): string => {
  const startDate = new Date(star);
  const endDate = new Date(end);

  const differenceInTime = endDate.getTime() - startDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

  if (differenceInDays < 30) {
    const weeks = Math.floor(differenceInDays / 7);
    const days = differenceInDays % 7;
    return `${weeks} ${weeks > 1 ? 'semanas' : 'semana'}`;
  }

  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  if (endDate.getDate() >= startDate.getDate()) {
    months += 1;
  }
  return `${months} ${months === 1 ? 'mes' : 'meses'}`;
};
