import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../navigations/BottomTapNavigator';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  const { accessToken } = useSelector(state => state.user);

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {accessToken
          ? <>
              <AppStack.Screen
                name='Main'
                component={MainScreen}
              />
            </>
          : <>
              <AppStack.Screen
                name='Login'
                component={Login}
              />
              <AppStack.Screen
                name='Signup'
                component={Signup}
              />
            </>}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
