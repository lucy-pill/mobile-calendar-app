// React
import React from 'react';

// Packages
import {NavigationContainer} from '@react-navigation/native';

// Navigation
import BottomNavigation from './src/navigation/BottomNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
