import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import HomeTopNav from '../components/HomeTopNav';
import FollowMate from '../components/FollowMate';

const MateRegisterScreen = () => {
  const { email, userName, allUsers, following } = useSelector(state => state.user);
  console.log('메이트레지스터 스크린 팔로잉 ' + following);
  console.log(following);
  return (
    <>
      <HomeTopNav />
      <FollowMate
        allUsers={allUsers}
        following={following}
        email={email}
        userName={userName}
      />
    </>
  );
};

export default MateRegisterScreen;

