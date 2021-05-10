import React, { useState } from 'react';
import { View, Animated, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const CountdownBtn = ({ isCountDownOn, handlePress }) => {
  const [isHabitDone, setHabitDoneStatus] = useState(false);

  const handleTimeColplete = () => {
    setHabitDoneStatus(true);
  };

  return (
    <View style={styles.pressButtonWrapper}>
      <Text style={styles.pressButtonText}>
        Press Your Habit
      </Text>
      <View style={styles.circleWrapper}>
        <TouchableOpacity onPress={handlePress}>
          <CountdownCircleTimer
            isPlaying={isCountDownOn}
            duration={3}
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
    borderWidth: 1
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
  }
});

export default CountdownBtn;
