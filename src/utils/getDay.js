export default function getDay(year, month, date, returnType) {
  const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date(year, month, date);
  const day = today.getDay();

  if (returnType === 'number') {
    return day;
  } else if (returnType === 'string') {
    return dayArr[day];
  } else {
    return false;
  }
}
