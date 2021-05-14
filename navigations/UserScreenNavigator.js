import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTapNavigator from './BottomTapNavigator';
import RegisterHabit from '../screens/RegisterHabit/RegisterHabit';

const Stack = createStackNavigator();

const UserScreenNavigator= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='BottomTabNavigator' component={BottomTapNavigator} />
        <Stack.Screen name='Register' component={RegisterHabit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserScreenNavigator;
