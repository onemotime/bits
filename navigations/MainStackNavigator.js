import React from 'react';
import { useSelector } from 'react-redux';

import AutchStackNavigator from './AuthStackNavigator';
import UserScreenNavigator from './UserScreenNavigator';


const MainStackNavigator = () => {
  const { accessToken } = useSelector(state => state.user);

  return (
    <>
      {accessToken
        ? <UserScreenNavigator />
        : <AutchStackNavigator />}
    </>
  );
};

export default MainStackNavigator;
