import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import LiveFeedScreen from './LiveFeedScreen';
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome
} from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

const Main = () => {
  return (
    <BottomTab.Navigator
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
      }}
    >
      <BottomTab.Screen name="습관" component={HomeScreen} />
      <BottomTab.Screen name="라이브" component={LiveFeedScreen} />
      <BottomTab.Screen name="검색" component={HomeScreen} />
      <BottomTab.Screen name="내정보" component={HomeScreen} />
    </BottomTab.Navigator>
  );
};

export default Main;
