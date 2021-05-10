import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { removeHabit } from '../redux/userSlice';

import HomeTopNav from '../components/HomeTopNav';
import HabitRegister from '../components/HabitRegister';
import UserHabit from '../components/UserHabit';
import CountDownBtn from '../components/CountdownBtn';

const HomeScreen = () => {
  const [isCountDownOn, setCountDown] = useState(false);
  const [isHabitSelected, setSelectedHabit] = useState(false);
  const [selectedHabitType, setSelectedHabitType] = useState('');
  const { habits, email } = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDeletePress = (targetIndex) => {
    const deleteInput = {
      email,
      targetIndex
    };

    dispatch(removeHabit(deleteInput));
  };

  const handleIconPress = (targetIndex) => {
    const habitType = habits[targetIndex].habitType;

    setSelectedHabit((prev) => !prev);
    setSelectedHabitType(habitType);
  };

  const handleRegisterHabitPress = () => {
    navigation.navigate('Register');
  };

  const handleCountDownBtnPress = () => {

  };

  return (
    <View style={styles.wrapper}>
      <HomeTopNav />
      {habits.length > 0
        ? <UserHabit
            habits={habits}
            handlePress={handleRegisterHabitPress}
            handleIconPress={(index) => handleIconPress(index)}
            handlePressX={(index) => handleDeletePress(index)}
            isHabitSelected={isHabitSelected}
            targetHabitType={selectedHabitType}
          />
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
