import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Animated, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { updateHabit } from '../../redux/userSlice';
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons';

const CountdownBtn = ({
  totalTime,
  setStartCountBtn,
  habitType,
  email
}) => {
  const [isHabitDone, setHabitDone] = useState(false);
  const [isPlaying, setPlaying] = useState(true);

  const dispatch = useDispatch();
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const handleTimeColplete = () => {
    const updateInput = {
      habitType,
      email,
      date: currentDate
    };

    dispatch(updateHabit(updateInput));

    setHabitDone(true);
  };

  const handleFinishIconPress = () => {
    setStartCountBtn(false);
  };

  const handlePausePress = () => {
    setPlaying(prev => !prev);
  };

  const handleCancelPress = () => {
    setStartCountBtn(false);
  };

  return (
    <View style={styles.pressButtonWrapper}>
      <View style={styles.circleWrapper}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={totalTime}
          colors={[
            ['#004777', 0.4],
            ['#F7B801', 0.4],
            ['#A30000', 0.2],
          ]}
          size={130}
          strokeWidth={10}
          onComplete={handleTimeColplete}
        >
          {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{
                color: animatedColor,
                fontSize: 18,
                fontWeight: '600'
              }}>
              {isHabitDone
                ? <TouchableOpacity onPress={handleFinishIconPress}>
                    <Text style={styles.doneText}>
                      <FontAwesome5 name='calendar-check' size={50} color='#4cd137' />
                    </Text>
                  </TouchableOpacity>
                : remainingTime + ' 초'}
            </Animated.Text>)}
        </CountdownCircleTimer>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.pauseBtn} onPress={handlePausePress}>
          <MaterialCommunityIcons name="play-pause" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={handleCancelPress}>
          <MaterialIcons name='cancel' size={40} color='red' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pressButtonWrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  pressButtonText: {
    fontWeight: '700',
    fontSize: 17,
    color: 'white'
  },
  circleWrapper: {
    marginTop: 30
  },
  doneText: {
    color: '#4cd137',
    fontWeight: '600'
  },
  btnWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 30
  },
  pauseBtn: {
    borderWidth: 1,
    marginRight: 10
  },
  cancelBtn: {
    borderWidth: 1,
    marginLeft: 10
  }
});

export default CountdownBtn;
