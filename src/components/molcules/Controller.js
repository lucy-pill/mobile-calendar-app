// React, React Native
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Packages
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// Utils
import getYear from '../../utils/getYear';
import getMonth from '../../utils/getMonth';
import getWidth from '../../utils/getWidth';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.arrow_back}>
        <SimpleLineIcons name="arrow-left" size={20} />
      </View>
      <View>
        <Text>
          {getMonth('string')} {getYear()}
        </Text>
      </View>
      <View style={styles.arrow_forward}>
        <SimpleLineIcons name="arrow-right" size={20} />
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
