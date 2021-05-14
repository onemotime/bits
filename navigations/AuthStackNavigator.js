import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';

const Stack = createStackNavigator();

const AutchStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AutchStackNavigator;
