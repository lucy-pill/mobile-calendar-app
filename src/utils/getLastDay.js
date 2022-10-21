export default function getLastDay(year, month) {
  const currLastDate = new Date(year, month, 0).getDate();

  return currLastDate;
}
