// React, React Native
import React from 'react';
import {StyleSheet, View} from 'react-native';

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
  },
  calenderBox: {
    flex: 0.8,
  },
  emptyBox: {
    flex: 0.2,
  },
});
