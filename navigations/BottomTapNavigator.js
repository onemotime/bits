import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { pickTabIconByName } from '../utils/pickTabIconByName';

import Home from '../screens/Home/Home';
import LiveFeed from '../screens/Live/LiveFeed';
import SearchMate from '../screens/Search/SearchMate';
import MyProfile from '../screens/Profile/MyProfile';

const Tab = createBottomTabNavigator();

const BottomTapNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return pickTabIconByName(route.name, color, size);
        }
      })}

      tabBarOptions={{
        activeTintColor: '#F48D3B',
        inactiveTintColor: 'gray',
        inactiveBackgroundColor: '#FFF0D9',
        activeBackgroundColor: '#FFF0D9'
      }}
    >
      <Tab.Screen name='습관' component={Home} />
      <Tab.Screen name='라이브' component={LiveFeed} />
      <Tab.Screen name='검색' component={SearchMate} />
      <Tab.Screen name='내정보' component={MyProfile} />
    </Tab.Navigator>
  );
};

export default BottomTapNavigator;
