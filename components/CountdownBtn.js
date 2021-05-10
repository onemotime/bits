import React, { useState } from 'react';
import { View, Animated, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { FontAwesome5 } from '@expo/vector-icons';

const CountdownBtn = ({ totalTime }) => {
  const [isHabitDone, setHabitDone] = useState(false);

  const handleTimeColplete = () => {
    setHabitDone(true);
  };

  return (
    <View style={styles.pressButtonWrapper}>
      <View style={styles.circleWrapper}>
        <CountdownCircleTimer
          isPlaying={true}
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
            <Animated.Text style={{ color: animatedColor }}>
              {isHabitDone
                ? <Text style={styles.doneText}>
                    <FontAwesome5 name='calendar-check' size={30} color='#4cd137' />
                  </Text>
                : remainingTime}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
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
