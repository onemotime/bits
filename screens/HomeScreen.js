import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import HomeTopNav from '../components/HomeTopNav';
import HabitRegister from '../components/HabitRegister';
import UserHabit from '../components/UserHabit';
import CountDownBtn from '../components/CountdownBtn';

const HomeScreen = () => {
  const [isCountDownOn, setCountDown] = useState(false);
  const { habits } = useSelector(state => state.user);
  const navigation = useNavigation();

  const handleRegisterHabitPress = () => {
    navigation.navigate('Register');
  };

  const handleCountDownBtnPress = () => {

  };

  return (
    <View style={styles.wrapper}>
      <HomeTopNav />
      {habits.length > 0
        ? <UserHabit habits={habits} />
        : <HabitRegister handlePress={handleRegisterHabitPress} />}
      <CountDownBtn
        handlePress={handleCountDownBtnPress}
        isCountDownOn={isCountDownOn}
      />
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
