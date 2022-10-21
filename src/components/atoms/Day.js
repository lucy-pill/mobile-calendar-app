// React, React Native
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Day({day, color}) {
  return (
    <View style={style(color).container}>
      <Text style={style(color).dayBox}>{day}</Text>
    </View>
  );
}

const style = color =>
  StyleSheet.create({
    container: {
      width: 55,
      height: 20,
    },
    dayBox: {
      textAlign: 'center',
      color: color,
      fontWeight: 'bold',
    },
  });
