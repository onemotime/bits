import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from '../screens/Home/HomeMain';
import RegisterHabit from '../screens/RegisterHabit/RegisterHabit';

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
