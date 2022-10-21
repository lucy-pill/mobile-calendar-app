// React, React Native
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Atoms
import Calender from '../components/templates/Calender';

export default function CalenderScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.calenderBox}>
        <Calender />
      </View>
      <View style={styles.emptyBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    with: '100%',
    height: 100,
    borderColor: 'red',
    borderWidth: 1,
  },
  calenderBox: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
  emptyBox: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
