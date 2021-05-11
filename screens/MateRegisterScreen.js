import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import HomeTopNav from '../components/HomeTopNav';
import FollowMate from '../components/FollowMate';

const MateRegisterScreen = () => {
  const { email, allUsers, following } = useSelector(state => state.user);

  return (
    <>
      <HomeTopNav />
      <FollowMate allUsers={allUsers} following={following} email={email} />
    </>
  );
};

export default MateRegisterScreen;

