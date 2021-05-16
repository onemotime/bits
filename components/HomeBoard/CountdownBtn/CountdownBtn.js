import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateHabit } from '../../../redux/userSlice';
import { View, Animated, Text, TouchableOpacity } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { FontAwesome5, MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { SIZES, NAMES, COLORS, STRINGS } from '../../../constants/index';

import styles from './styles';

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
            [COLORS.TIMER_FIRST_RENDER, SIZES.TIMER_FIRST_RATIO],
            [COLORS.TIMER_SECOND_RENDER, SIZES.TIMER_SECOND_RATIO],
            [COLORS.TIMER_THIRD_RENDER, SIZES.TIMER_THIRD_RATIO],
          ]}
          size={SIZES.TIMER}
          strokeWidth={SIZES.TIMER_STROKE_WIDTH}
          onComplete={handleTimeColplete}
        >
          {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{
                color: animatedColor,
                fontSize: SIZES.TIMER_TEXT,
                fontWeight: SIZES.TIMER_FONTWEIGHT
              }}>
              {isHabitDone
                ? <TouchableOpacity onPress={onFinishIconPress}>
                    <Text style={styles.doneText}>
                      <FontAwesome5
                        name={NAMES.CALENDAR_ICON}
                        size={SIZES.FINISH_ICON}
                        color={COLORS.CALENDAR_ICON}
                      />
                    </Text>
                  </TouchableOpacity>
                : remainingTime + STRINGS.SECOND}
            </Animated.Text>)}
        </CountdownCircleTimer>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.pauseBtn}
          onPress={onPausePress}
        >
          <MaterialCommunityIcons
            name={NAMES.PAUSE_ICON}
            size={SIZES.PLAY_CANCLE}
            color={COLORS.BLACK}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={onQuitPress}
        >
          <MaterialIcons
            name={NAMES.CANCLE_ICON}
            size={SIZES.PLAY_CANCLE}
            color={COLORS.RED}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountdownBtn;
