// React, React Native
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Components
import Header from '../organisms/Header';
import Content from '../organisms/Content';

export default function Calender() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
