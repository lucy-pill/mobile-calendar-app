// React, React Native
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {setMonth, setYear, setSelectedDate} from '../../redux/modules/calendar';

export default function Date({date, color, seleted, dateState}) {
  const month = useSelector(state => state.calendar.month);
  const year = useSelector(state => state.calendar.year);
  const selectedDate = useSelector(state => state.calendar.selectedDate);

  const dispatch = useDispatch();

  const onClickHandle = () => {
    if (dateState === 'prev') {
      if (month === 0) {
        dispatch(setYear(dateState - 1));
        dispatch(setMonth(11));
        dispatch(setSelectedDate({year: year - 1, month: 11, date}));
      } else {
        dispatch(setMonth(month - 1));
        dispatch(setSelectedDate({year, month: month - 1, date}));
      }
    } else if (dateState === 'next') {
      if (month === 11) {
        dispatch(setYear(year + 1));
        dispatch(setMonth(0));
        dispatch(setSelectedDate({year: year + 1, month: 0, date}));
      } else {
        dispatch(setMonth(month + 1));
        dispatch(setSelectedDate({year, month: month + 1, date}));
      }
    } else {
      if (selectedDate.year !== null) {
        if (
          selectedDate.year === year &&
          selectedDate.month === month &&
          selectedDate.date === date
        ) {
          dispatch(setSelectedDate({year: null, month: null, date: null}));
        } else {
          dispatch(setSelectedDate({year, month, date}));
        }
      } else {
        dispatch(setSelectedDate({year, month, date}));
      }
    }
  };

  return (
    <TouchableOpacity
      style={style(color).container}
      onPress={() => onClickHandle()}>
      {seleted ? (
        <View style={style(color).clicked}>
          <Text style={style(color).dateBox}>{date}</Text>
        </View>
      ) : (
        <View style={style(color).unclicked}>
          <Text style={style(color).dateBox}>{date}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const style = props =>
  StyleSheet.create({
    container: {
      width: 55,
      height: 55,
      justifyContent: 'center',
      alignItems: 'center',
    },
    clicked: {
      width: 45,
      height: 45,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
    },
    unclicked: {
      width: 55,
      height: 55,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dateBox: {
      color: props,
    },
  });
