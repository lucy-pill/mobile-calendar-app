// React, React Native
import React from 'react';
import {StyleSheet, View} from 'react-native';

// Components
import Day from '../atoms/Day';

// Utils
import getWidth from '../../utils/getWidth';

export default function Week() {
  const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <View style={style.container}>
      {dayArr.map((day, idx) => {
        if (idx === 0) {
          return <Day day={day} color={'red'} />;
        } else if (idx === 6) {
          return <Day day={day} color={'blue'} />;
        } else {
          return <Day day={day} color={'grey'} />;
        }
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 0.5,
    width: getWidth(),
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
