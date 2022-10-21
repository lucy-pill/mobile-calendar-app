// React, React Native
import React from 'react';
import {StyleSheet, View} from 'react-native';

// Components
import Controller from '../molcules/Controller';
import Week from '../molcules/Week';

// Utils
import getWidth from '../../utils/getWidth';

export default function Header() {
  return (
    <View style={styles.container}>
      <Controller />
      <Week />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    width: getWidth(),
  },
});
