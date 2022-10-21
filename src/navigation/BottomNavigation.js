// React
import React from 'react';

// Packages
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import LibraryScreen from '../screens/LibraryScreen';
import MypageScreen from '../screens/MypageScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={20} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'calendar' : 'calendar-outline'}
              size={20}
            />
          ),
        }}
        name="Calendar"
        component={CalendarScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={focused ? 'book' : 'book-outline'} size={20} />
          ),
        }}
        name="Library"
        component={LibraryScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name={focused ? 'user' : 'user-o'} size={20} />
          ),
        }}
        name="My Page"
        component={MypageScreen}
      />
    </Tab.Navigator>
  );
}
