// React, React Native
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Redux
import {useSelector, useDispatch} from 'react-redux';

// Packages
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// Utils
import getYear from '../../utils/getYear';
import getMonth from '../../utils/getMonth';
import getWidth from '../../utils/getWidth';

export default function Header() {
  const dispatch = useDispatch();
  const year = useSelector(state => state.calendar.year);
  const month = useSelector(state => state.calendar.month);
  const setMonth = useSelector(state => state.calendar.setMonth);
  const setYear = useSelector(state => state.calendar.setYear);

  const onClickHandle = state => {
    switch (state) {
      case 'prev': {
        if (month === 0) {
          dispatch(setYear(year - 1));
          dispatch(setMonth(11));
        } else {
          dispatch(setMonth(month - 1));
        }
      }
      default: {
        break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrow_back}>
        <SimpleLineIcons
          name="arrow-left"
          size={20}
          onPress={() => onClickHandle('prev')}
        />
      </View>
      <View>
        <Text>
          {getMonth('string')} {getYear()}
        </Text>
      </View>
      <View style={styles.arrow_forward}>
        <SimpleLineIcons
          name="arrow-right"
          size={20}
          onPress={() => onClickHandle('next')}
        />
      </View>
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
