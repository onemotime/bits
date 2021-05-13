import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import LiveFeed from '../Live/LiveFeed';
import SearchMate from '../Search/SearchMate';
import MyProfile from '../Profile/MyProfile';

import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case '습관': {
              return <Entypo name='circle' size={18} color={color} />
            }
            case '라이브': {
              return <Ionicons name='md-play' size={size} color={color} />
            }
            case '검색': {
              return <MaterialCommunityIcons name='magnify' size={size} color={color} />
            }
            case '내정보': {
              return <FontAwesome name='user-circle' size={size} color={color} />
            }
          }
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

export default Main;
