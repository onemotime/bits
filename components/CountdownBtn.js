import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Animated, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const CountdownBtn = () => {
  const [isButtonPressed, setButtonPressedStatus] = useState(false);
  const [isHabitDone, setHabitDoneStatus] = useState(false);

  const handleCountdownPress = () => {
    setButtonPressedStatus(true);
  };

  const handleTimeColplete = () => {
    setButtonPressedStatus(false);
    setHabitDoneStatus(true);
  };

  return (
    <View style={styles.pressButtonWrapper}>
      <Text style={styles.pressButtonText}>
        Press Your Habit
      </Text>
      <View style={styles.circleWrapper}>
        <TouchableOpacity onPress={handleCountdownPress}>
          <CountdownCircleTimer
            isPlaying={isButtonPressed}
            duration={3}
            colors={[
              ['#004777', 0.4],
              ['#F7B801', 0.4],
              ['#A30000', 0.2],
            ]}
            size={150}
            strokeWidth={10}
            onComplete={handleTimeColplete}
          >
            {({ remainingTime, animatedColor }) => (
              <Animated.Text style={{ color: animatedColor }}>
                {isHabitDone
                  ? <Text style={styles.doneText}>Done !</Text>
                  : remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pressButtonWrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexGrow: 0.4
  },
  pressButtonText: {
    fontWeight: '600',
    color: 'white'
  },
  circleWrapper: {
    marginBottom: 20
  },
  doneText: {
    color: '#4cd137',
    fontWeight: '600'
  }
});

export default CountdownBtn;
