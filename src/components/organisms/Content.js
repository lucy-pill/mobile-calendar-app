// React, React Native
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Redux
import {useSelector} from 'react-redux';

// Component
import Date from '../atoms/Date';

// Utils
import getYear from '../../utils/getYear';
import getMonth from '../../utils/getMonth';
import getDay from '../../utils/getDay';
import getLastDay from '../../utils/getLastDay';

export default function Content() {
  const year = useSelector(state => state.calendar.year);
  const month = useSelector(state => state.calendar.month);

  const prevLastDate = getLastDay(year, month);
  const prevDateArray = Array.from(
    {length: getDay(year, month, 1, 'number')},
    (num = prevLastDate, i) => num - i,
  ).reverse();

  const currLastDate = getLastDay(year, month + 1);
  const currDateArray = Array.from(
    {length: currLastDate},
    (num = 1, i) => num + i,
  );

  const nextDateArray = Array.from(
    {length: 6 - getDay(year, month, currLastDate, 'number')},
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
