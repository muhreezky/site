export function afterToday(days: number = 1) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}