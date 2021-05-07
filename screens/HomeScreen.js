import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomeTopNav from '../components/HomeTopNav';
import HabitRegister from '../components/HabitRegister';
import HomeBottomNav from '../components/HomeBottomNav';
import UserHabit from '../components/UserHabit';
import CountdownBtn from '../components/CountdownBtn';

const HomeScreen = () => {
  const mockHabitData = [
    {
      type: 'code',
      name: '코딩',
      day: 30,
      count: 0,
      like: 0
    },
    {
      type: 'swim',
      name: '수영',
      day: 15,
      count: 3,
      like: 0
    },
    {
      type: 'read',
      name: '독서',
      day: 22,
      count: 12,
      like: 333
    }
  ];

  return (
    <View style={styles.wrapper}>
      <HomeTopNav />
      <HabitRegister />
      <CountdownBtn />
      <HomeBottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#E8BE64'
  }
});

export default HomeScreen;
