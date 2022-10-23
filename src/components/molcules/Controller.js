// React, React Native
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {setMonth, setYear} from '../../redux/modules/calendar';

// Packages
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// Utils
import getWidth from '../../utils/getWidth';

export default function Header() {
  const dispatch = useDispatch();
  const year = useSelector(state => state.calendar.year);
  const month = useSelector(state => state.calendar.month);

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

  const onClickHandle = state => {
    switch (state) {
      case 'prev': {
        if (month === 0) {
          dispatch(setYear(year - 1));
          dispatch(setMonth(11));
        } else {
          dispatch(setMonth(month - 1));
        }
        break;
      }
      case 'next': {
        if (month === 11) {
          dispatch(setYear(year + 1));
          dispatch(setMonth(0));
        } else {
          dispatch(setMonth(month + 1));
        }
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrow_back}
        onPress={() => onClickHandle('prev')}>
        <SimpleLineIcons name="arrow-left" size={20} />
      </TouchableOpacity>
      <View>
        <Text>
          {monthArr[month]} {year}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.arrow_forward}
        onPress={() => onClickHandle('next')}>
        <SimpleLineIcons name="arrow-right" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: getWidth(),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow_back: {
    position: 'absolute',
    left: 10,
  },
  arrow_forward: {
    position: 'absolute',
    right: 10,
  },
});
