import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { removeHabit } from '../redux/userSlice';
import convertTimeStrToSec from '../utils/convertTimeStrToSec';


import HabitRegister from '../components/HabitRegister';
import UserHabit from '../components/UserHabit';
import CountDownBtn from '../components/CountdownBtn';
import StartCountDownBtn from '../components/StartCountDownBtn';
import HomeTopNav from '../components/HomeTopNav';

const HomeMain = () => {
  const [isHabitSelected, setSelectedHabit] = useState(false);
  const [targetHabit, setTargetHabit] = useState(null);
  const [countDownTime, setCountDownTime] = useState(0);
  const [isStartCountBtnOn, setStartCountBtn] = useState(false);

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
    const habitType = habits[targetIndex];
    const sec = convertTimeStrToSec(habits[targetIndex].settedTime);

    setSelectedHabit((prev) => {

      if (prev === false) {
        setCountDownTime(sec);
        setTargetHabit(habitType);

        return !prev
      }

      setCountDownTime(0);
      setTargetHabit(null);

      return !prev;
    });
  };

  const handleRegisterHabitPress = () => {
    navigation.navigate('Register');
  };

  const handleStartCountDownPress = () => {
    if (!targetHabit?.habitType || !isHabitSelected) return;

    setSelectedHabit(false);
    setStartCountBtn(true);
  };

  return (
    <View style={styles.wrapper}>
      <HomeTopNav />
        {isStartCountBtnOn
          ? <View style={styles.complement}/>
          : habits?.length > 0
              ? <UserHabit
                  habits={habits}
                  handlePress={handleRegisterHabitPress}
                  handleIconPress={(index) => handleIconPress(index)}
                  handlePressX={(index) => handleDeletePress(index)}
                  isHabitSelected={isHabitSelected}
                  targetHabit={targetHabit}
                />
              : <HabitRegister handlePress={handleRegisterHabitPress} />}
        {isStartCountBtnOn
          ? <CountDownBtn
              totalTime={countDownTime}
              setStartCountBtn={setStartCountBtn}
              habitType={targetHabit.habitType}
              email={email}
            />
          : <StartCountDownBtn handlePress={handleStartCountDownPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F9BC56'
  },
  complement: {
    height: 100
  }
});

export default HomeMain;
