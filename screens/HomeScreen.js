import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HomeTopNav from '../components/HomeTopNav';
import HabitRegister from '../components/HabitRegister';
import UserHabit from '../components/UserHabit';
import HomeBottomNav from '../components/HomeBottomNav';
import CountdownBtn from '../components/CountdownBtn';
import MateRegister from '../components/MateRegister';
import SettingHabit from '../components/SettingHabit';
import LoginScreen from './LoginScreen';
import FollowMate from '../components/FollowMate';
import LiveFeed from '../components/LiveFeed';

const HomeScreen = () => {
  const mockHabitData = [
    {
      type: 'code',
      name: '코딩',
      day: 30,
      count: 0,
      mate: 3,
      like: 0,
      img: 'mock img'
    },
    {
      type: 'swim',
      name: '수영',
      day: 15,
      count: 3,
      mate: 4,
      like: 0,
      img: 'mock img url'
    },
    {
      type: 'read',
      name: '독서',
      day: 22,
      count: 12,
      mate: 5,
      like: 333,
      img: 'mock img url'
    }
  ];

  return (
    <View style={styles.wrapper}>
      <HomeTopNav />
      <LiveFeed />
      <HomeBottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#E8BE64'
  }
});

export default HomeScreen;
