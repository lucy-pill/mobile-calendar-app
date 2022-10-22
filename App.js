// React
import React from 'react';

// Redux
import {Provider} from 'react-redux';
import store from './src/redux/store';

// Packages
import {NavigationContainer} from '@react-navigation/native';

// Navigation
import BottomNavigation from './src/navigation/BottomNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </Provider>
  );
}
