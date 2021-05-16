import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { sendPushNotification } from '../../api/pushApi';
import { removeHabit, fetchPushTokens } from '../../redux/userSlice';
import convertTimeStrToSec from '../../utils/convertTimeStrToSec';

import HabitRegister from '../../components/HomeBoard/HabitRegister/HabitRegister';
import UserHabit from '../../components/HomeBoard/UserHabit/UserHabit';
import CountDownBtn from '../../components/HomeBoard/CountdownBtn/CountdownBtn';
import StartCountDownBtn from '../../components/HomeBoard/StartCountDownBtn/StartCountDownBtn';
import TopNav from '../../components/shared/TopNav/TopNav';

const Home = () => {
  const [isHabitSelected, setSelectedHabit] = useState(false);
  const [targetHabit, setTargetHabit] = useState(null);
  const [countDownTime, setCountDownTime] = useState(0);
  const [isStartCountBtnOn, setStartCountBtn] = useState(false);

  const { userName, habits, accessToken, followerPushTokens } = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {

    const sendNotification = async () => {
      for (let index = 0; index < followerPushTokens.length; index++) {
        sendPushNotification(
          followerPushTokens[index],
          `${userName}님이 ${targetHabit.habitType} 습관을 시작하셨습니다`
        );
      }
    };

    sendNotification();
  }, [followerPushTokens]);

  const handleDeletePress = (targetIndex) => {
    const deleteInput = {
      accessToken,
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

  const handleStartCountDownPress = async () => {
    if (!targetHabit?.habitType || !isHabitSelected) return;

    try {
      dispatch(fetchPushTokens(accessToken));
    } catch (err) {
      console.error(err);
    }

    setSelectedHabit(false);
    setStartCountBtn(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F9BC56' }}>
      <TopNav />
        {!isStartCountBtnOn &&
          (habits?.length > 0
            ? <UserHabit
                habits={habits}
                onAddPress={handleRegisterHabitPress}
                onIconPress={(index) => handleIconPress(index)}
                onDeletePress={(index) => handleDeletePress(index)}
                isHabitSelected={isHabitSelected}
                targetHabit={targetHabit}
              />
            : <HabitRegister onAddPress={handleRegisterHabitPress} />)}
        {isStartCountBtnOn
          ? <CountDownBtn
              totalTime={countDownTime}
              setStartCountBtn={setStartCountBtn}
              habitType={targetHabit.habitType}
              accessToken={accessToken}
            />
          : <StartCountDownBtn onStartPress={handleStartCountDownPress} />}
    </View>
  );
};

export default Home;
