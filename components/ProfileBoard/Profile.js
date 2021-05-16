import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProfileStatus from './ProfileStatus';
import ProgressHabit from './ProgressHabit';
import CompletedHabit from './CompletedHabit';
import Calendar from './ProfileCalendar';
import Empty from '../../screens/Animations/Empty/Empty';

const Profile = ({ userInfo, accessToken, imageUri }) => {
  const [isActingHabitOn, setActingHabit] = useState(true);
  const [isCompletedHabitOn, setCompletedHabit] = useState(false);
  const [isCalendarOn, setCalendar] = useState(false);

  const actingHabitPressed = () => {
    setActingHabit(true);
    setCompletedHabit(false);
    setCalendar(false);
  };

  const completeHabitPressed = () => {
    setActingHabit(false);
    setCompletedHabit(true);
    setCalendar(false);
  };

  const calendarPressed = () => {
    setActingHabit(false);
    setCompletedHabit(false);
    setCalendar(true);
  };


  return (
    <View style={styles.profileWrapper}>
      <ProfileStatus
        accessToken={accessToken}
        imageUri={imageUri}
        userInfo={userInfo}
        handleActingPress={actingHabitPressed}
        handleCompletePress={completeHabitPressed}
        handleCalendarPress={calendarPressed}
      />
      <View style={styles.profileBottomWrapper}>
        {isActingHabitOn &&
          (userInfo.habits.length > 0
            ? <ProgressHabit userInfo={userInfo} />
            : <View style={styles.registerHabitWrapper}>
                <Text style={styles.registerHabitText}>진행중인 습관이 없습니다</Text>
                <Empty />
              </View>)}
        {isCompletedHabitOn &&
          (userInfo.completedHabits.length > 0
            ? <CompletedHabit userInfo={userInfo} />
            :  <View style={styles.registerHabitWrapper}>
                <Text style={styles.completeHabitText}>완료된 습관이 없습니다</Text>
                <Empty />
              </View>)}
        {isCalendarOn &&
          <Calendar completedDates={userInfo.completedDates} />}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    backgroundColor: 'white',
    borderWidth: 1,
    flexGrow: 1
  },
  profileBottomWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerHabitWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  registerHabitText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '800',
  },
  completeHabitText: {
    fontSize: 15,
    fontWeight: '800'
  }
});

export default Profile;
