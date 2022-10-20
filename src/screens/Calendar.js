import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Calender() {
  return (
    <View style={styles.container}>
      <Text>Calender</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
