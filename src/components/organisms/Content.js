// React, React Native
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Redux
import {useSelector} from 'react-redux';

// Packages
import shortid from 'shortid';

// Component
import Date from '../atoms/Date';

// Utils
import getDay from '../../utils/getDay';
import getLastDay from '../../utils/getLastDay';

export default function Content() {
  const year = useSelector(state => state.calendar.year);
  const month = useSelector(state => state.calendar.month);
  const selectedDate = useSelector(state => state.calendar.selectedDate);

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

  const nextArrayLength =
    prevDateArray.length + currDateArray.length <= 35 ? 13 : 6;

  const nextDateArray = Array.from(
    {length: nextArrayLength - getDay(year, month, currLastDate, 'number')},
    (num = 1, i) => num + i,
  );

  return (
    <View style={style.container}>
      {prevDateArray.map(date => {
        return (
          <Date
            key={shortid.generate()}
            date={date}
            color={'#cecece'}
            seleted={false}
            dateState={'prev'}
          />
        );
      })}
      {currDateArray.map(date => {
        if (
          year === selectedDate.year &&
          month === selectedDate.month &&
          date === selectedDate.date
        ) {
          return (
            <Date
              key={shortid.generate()}
              date={date}
              color={'#4d4d4d'}
              seleted={true}
              dateState={'curr'}
            />
          );
        } else {
          return (
            <Date
              key={shortid.generate()}
              date={date}
              color={'#4d4d4d'}
              seleted={false}
              dateState={'curr'}
            />
          );
        }
      })}
      {nextDateArray.map(date => {
        return (
          <Date
            key={shortid.generate()}
            date={date}
            color={'#cecece'}
            seleted={false}
            dateState={'next'}
          />
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
