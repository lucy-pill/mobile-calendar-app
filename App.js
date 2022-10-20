import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import Home from './src/screens/Home';
import Calendar from './src/screens/Calendar';
import Library from './src/screens/Library';
import Mypage from './src/screens/Mypage';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Icon name={focused ? 'home' : 'home-outline'} size={20} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'calendar' : 'calendar-outline'}
                size={20}
              />
            ),
          }}
          name="Calendar"
          component={Calendar}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Icon name={focused ? 'book' : 'book-outline'} size={20} />
            ),
          }}
          name="Library"
          component={Library}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <IconFontAwesome name={focused ? 'user' : 'user-o'} size={20} />
            ),
          }}
          name="My Page"
          component={Mypage}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
