// React, React Native
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Component
import Date from '../atoms/Date';

// Utils
import getYear from '../../utils/getYear';
import getMonth from '../../utils/getMonth';
import getDay from '../../utils/getDay';
import getLastDay from '../../utils/getLastDay';

export default function Content() {
  // const startDay = new Date(currentYear, currentMonth, 0);
  // const prevDate = startDay.getDate();
  // const prevDay = startDay.getDay();
  const prevLastDate = getLastDay(getYear(), getMonth('number'));
  const prevDateArray = Array.from(
    {length: getDay(getYear(), getMonth('number'), 1, 'number')},
    (num = prevLastDate, i) => num - i,
  ).reverse();

  const currLastDate = getLastDay(getYear(), getMonth('number') + 1);
  const currDateArray = Array.from({length: currLastDate}, (v, i) => i + 1);
  console.log(getDay(getYear(), getMonth('number'), currLastDate, 'number'));
  const nextDateArray = Array.from(
    {length: 6 - getDay(getYear(), getMonth('number'), currLastDate, 'number')},
    (num = 1, i) => num + i,
  );

  return (
    <View style={style.container}>
      {prevDateArray.map(date => {
        return <Date date={date} />;
      })}
      {currDateArray.map(date => {
        return <Date date={date} />;
      })}
      {nextDateArray.map(date => {
        return <Date date={date} />;
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
