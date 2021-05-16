import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { registerHabit } from '../../redux/userSlice';
import { Picker } from '@react-native-picker/picker';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import HabitRegisterModal from '../ReusableModal/ReusableModal';

import styles from './styles';

const SettingHabit = () => {
  const dispatch = useDispatch();
  const { habits, accessToken } = useSelector(state => state.user);
  const navigation = useNavigation();

  const [isModalShown, setModal] = useState(false);
  const [selectedAct, setAct] = useState(null);
  const [selectedDay, setDay] = useState(null);
  const [selectedTime, setTime] = useState(null);

  const [isActShown, setShowAct] = useState(false);
  const [isDayShown, setShowDay] = useState(false);
  const [isTimeShown, setShowTime] = useState(false);

  const handleActPress = () => {
    setShowAct(true);
  };

  const handleActChange = (actType) => {
    setAct(actType);
    setShowAct(false);
  };

  const handleDayPress = () => {
    setShowDay(true);
  };

  const handleDayChange = (dayType) => {
    setDay(dayType);
    setShowDay(false);
  };

  const handleTimePress = () => {
    setShowTime(true);
  };

  const handleTimeChange = (timeType) => {
    setTime(timeType);
    setShowTime(false);
  };

  const handleModalPress = () => {
    setModal(false);
  };

  const handleRegisterPress = async () => {
    if (selectedAct === null || selectedDay === null || selectedTime === null) return;

    const isSameHabitRegistered = habits.some(habit => {
      return habit.habitType === selectedAct;
    });

    if (isSameHabitRegistered) {
      setModal(true);
      return;
    };

    const registerInput = {
      accessToken,
      actType: selectedAct,
      day: selectedDay,
      time: selectedTime
    };

    dispatch(registerHabit(registerInput));

    navigation.navigate('습관');
  };

  return (
    <>
      <HabitRegisterModal
        message={'이미 등록된 습관입니다'}
        visible={isModalShown}
        onButtonPress={handleModalPress}
      />
      <View style={styles.subscribeWrapper}>
        <Text style={styles.subscribeText}>습관을 등록해주세요</Text>
        <View style={styles.inputWrapper}>
          {(!isActShown && !isDayShown && !isTimeShown) &&
            <TouchableOpacity
              style={styles.actInput}
              onPress={handleActPress}
            >
              <Text style={styles.actText}>Act</Text>
              {selectedAct &&
                <Text style={styles.selectedAct}>
                  {selectedAct}
                </Text>}
            </TouchableOpacity>}
          {isActShown &&
            <Picker
              selectedValue={selectedAct}
              onValueChange={handleActChange}
              style={{
                transform: [
                  { scaleX: 0.8 },
                  { scaleY: 0.8 },
                ]
              }}
            >
              <Picker.Item label='Code' value='code' />
              <Picker.Item label='Read' value='read' />
              <Picker.Item label='Swim' value='swim' />
              <Picker.Item label='Meditate' value='meditate' />
              <Picker.Item label='Run' value='run' />
              <Picker.Item label='Bicycle' value='bicycle' />
              <Picker.Item label='Yoga' value='yoga' />
            </Picker>}
          {(!isActShown && !isDayShown && !isTimeShown) &&
            <TouchableOpacity
              style={styles.dayInput}
              onPress={handleDayPress}
            >
              <Text style={styles.dayText}>Day</Text>
              {selectedDay &&
                <Text style={styles.selectedDay}>
                  {selectedDay}
                </Text>}
            </TouchableOpacity>}
          {isDayShown &&
            <Picker
              selectedValue={selectedDay}
              onValueChange={handleDayChange}
              style={{
                transform: [
                  { scaleX: 0.8 },
                  { scaleY: 0.8 },
                ]
              }}
            >
              <Picker.Item label='2 days' value='2' />
              <Picker.Item label='7 days' value='7' />
              <Picker.Item label='14 days' value='14' />
              <Picker.Item label='21 days' value='21' />
              <Picker.Item label='28 days' value='28' />
          </Picker>}
          {(!isActShown && !isDayShown && !isTimeShown) &&
            <TouchableOpacity style={styles.timeInput} onPress={handleTimePress}>
              <Text style={styles.timeText}>Time</Text>
              {selectedTime &&
                <Text style={styles.selectedTime}>
                  {selectedTime}
                </Text>}
            </TouchableOpacity>}
          {isTimeShown &&
            <Picker
              selectedValue={selectedTime}
              onValueChange={handleTimeChange}
              style={{
                transform: [
                  { scaleX: 0.8 },
                  { scaleY: 0.8 },
                ]
              }}
            >
              <Picker.Item label='3 s' value='3 s' />
              <Picker.Item label='10 s' value='10 s' />
              <Picker.Item label='10 m' value='10 m' />
              <Picker.Item label='30 m' value='30 m' />
              <Picker.Item label='1 h' value='1 h' />
          </Picker>}
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title='등록'
            color='white'
            onPress={handleRegisterPress}
          />
        </View>
      </View>
    </>
  );
};

export default SettingHabit;
