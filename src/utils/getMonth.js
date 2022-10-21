export default function getMonth(returnType) {
  const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date();
  const month = date.getMonth();

  if (returnType === 'number') {
    return month;
  } else if (returnType === 'string') {
    return monthArr[month];
  } else {
    return false;
  }
}
