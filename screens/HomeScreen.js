import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

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

// const mockHabitData = [
//   {
//     type: 'code',
//     name: '코딩',
//     day: 30,
//     count: 0,
//     mate: 3,
//     like: 0,
//     img: 'mock img'
//   },
//   {
//     type: 'swim',
//     name: '수영',
//     day: 15,
//     count: 3,
//     mate: 4,
//     like: 0,
//     img: 'mock img url'
//   },
//   {
//     type: 'read',
//     name: '독서',
//     day: 22,
//     count: 12,
//     mate: 5,
//     like: 333,
//     img: 'mock img url'
//   }
// ];
