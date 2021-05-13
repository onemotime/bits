import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from '../screens/HomeMain';
import RegisterHabit from '../screens/RegisterHabit';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <>
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name='Home' component={HomeMain} />
        <HomeStack.Screen name='Register' component={RegisterHabit} />
      </HomeStack.Navigator>
    </>
  );
};

export default HomeNavigator;
