import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  const { accessToken } = useSelector(state => state.user);

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {accessToken
          ? <>
              <AppStack.Screen name='Home' component={HomeScreen} />
            </>
          : <>
              <AppStack.Screen name='Login' component={LoginScreen} />
              <AppStack.Screen name='Signup' component={SignupScreen} />
            </>}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
