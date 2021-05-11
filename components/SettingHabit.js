import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { registerHabit } from '../redux/userSlice';
import { Picker } from '@react-native-picker/picker';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingHabit = () => {
  const dispatch = useDispatch();
  const { email, habits } = useSelector(state => state.user);
  const navigation = useNavigation();
  console.log(habits);
  console.log(email);

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

  const handleRegisterPress = async () => {
    if (selectedAct === null || selectedDay === null || selectedTime === null) return;

    const isSameHabitRegistered = habits.some(habit => {
      return habit.habitType === selectedAct;
    });

    if (isSameHabitRegistered) return;

    const registerInput = {
      email,
      actType: selectedAct,
      day: selectedDay,
      time: selectedTime
    };

    await dispatch(registerHabit(registerInput));

    navigation.navigate('습관');
  };

  return (
    <View style={styles.subscribeWrapper}>
      <Text style={styles.subscribeText}>습관을 등록해주세요</Text>
      <View style={styles.inputWrapper}>
        {(!isActShown && !isDayShown && !isTimeShown) &&
          <TouchableOpacity style={styles.actInput} onPress={handleActPress}>
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
          </Picker>}
        {(!isActShown && !isDayShown && !isTimeShown) &&
          <TouchableOpacity style={styles.dayInput} onPress={handleDayPress}>
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
        <Button title='등록' color='white' onPress={handleRegisterPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subscribeWrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#EDCD88',
    borderRadius: 10,
    paddingBottom: 25,
    width: '80%',
    height: '50%',
    paddingBottom: 10
  },
  subscribeText: {
    color: 'white',
    fontWeight: '600',
    marginTop: 20
  },
  inputWrapper: {
    justifyContent: 'space-evenly',
    width: '80%',
    height: '80%'
  },
  actInput: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '20%',
    borderRadius: 5
  },
  actText: {
    fontWeight: '800',
    color: '#E4B356'
  },
  selectedAct: {
    color: 'gray',
    left: 20,
    fontWeight: '600'
  },
  dayInput: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '20%',
    borderRadius: 5
  },
  dayText: {
    fontWeight: '800',
    color: '#E4B356'
  },
  selectedDay: {
    color: 'gray',
    left: 20,
    fontWeight: '600'
  },
  timeInput: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '20%',
    borderRadius: 5
  },
  timeText: {
    fontWeight: '800',
    color: '#E4B356'
  },
  selectedTime: {
    color: 'gray',
    left: 20,
    fontWeight: '600'
  },
  buttonWrapper: {
    width: '40%',
    borderRadius: 8,
    backgroundColor: '#D68C43'
  }
});

export default SettingHabit;
