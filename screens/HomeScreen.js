import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomeTopNav from '../components/HomeTopNav';
import HabitRegister from '../components/HabitRegister';
import HomeBottomNav from '../components/HomeBottomNav';

const HomeScreen = () => {
  return (
    <View style={styles.wrapper}>
      <HomeTopNav />
      <HabitRegister />
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
