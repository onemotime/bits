import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import HomeTopNav from '../components/HomeTopNav';

import LiveFeed from '../components/LiveFeed';
import MateRegister from '../components/MateRegister';

const LiveFeedScreen = () => {
  const { email, following } = useSelector(state => state.user);
  const { followingUserHabits } = useSelector(state => state.habit);
  console.log('라이브피드 스크린 팔로잉 유저 해빗' + followingUserHabits);
  return (
    <>
      <HomeTopNav />
      {following.length > 0
        ? <LiveFeed email={email} habits={followingUserHabits} />
        : <MateRegister email={email} />}
    </>
  );
};

export default LiveFeedScreen;
