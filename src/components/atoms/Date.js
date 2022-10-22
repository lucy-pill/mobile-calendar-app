// React, React Native
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Date({date, Seleted}) {
  return (
    <View style={style.container}>
      <Text style={style.dateBox}>{date}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: 55,
    height: 55,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
