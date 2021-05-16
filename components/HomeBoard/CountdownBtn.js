import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateHabit } from '../../redux/userSlice';
import { View, Animated, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { FontAwesome5, MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';

const CountdownBtn = ({
  totalTime,
  setStartCountBtn,
  habitType,
  accessToken
}) => {
  const date = new Date();
  const dispatch = useDispatch();
  const [isHabitDone, setHabitDone] = useState(false);
  const [isPlaying, setPlaying] = useState(true);
  const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const handleTimeColplete = () => {
    const updateInput = {
      habitType,
      accessToken,
      date: currentDate
    };

    dispatch(updateHabit(updateInput));

    setHabitDone(true);
  };

  const onFinishIconPress = () => {
    setStartCountBtn(false);
  };

  const onPausePress = () => {
    setPlaying(prev => !prev);
  };

  const onQuitPress = () => {
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
                ? <TouchableOpacity onPress={onFinishIconPress}>
                    <Text style={styles.doneText}>
                      <FontAwesome5
                        name='calendar-check'
                        size={50}
                        color='#4cd137'
                      />
                    </Text>
                  </TouchableOpacity>
                : remainingTime + ' 초'}
            </Animated.Text>)}
        </CountdownCircleTimer>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.pauseBtn}
          onPress={onPausePress}
        >
          <MaterialCommunityIcons
            name='play-pause'
            size={40}
            color='black'
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={onQuitPress}
        >
          <MaterialIcons
            name='cancel'
            size={40}
            color='red'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pressButtonWrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1
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
  },
  pauseBtn: {
    marginRight: 15
  },
  cancelBtn: {
    marginLeft: 15
  }
});

export default CountdownBtn;
