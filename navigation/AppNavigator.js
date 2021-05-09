import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  const { isSignedIn } = useSelector(state => state.user);
  console.log(isSignedIn);
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn
          ? <AppStack.Screen name='Home' component={HomeScreen} />
          : <>
              <AppStack.Screen name='Login' component={LoginScreen} />
              <AppStack.Screen name='Signup' component={SignupScreen} />
            </>}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
