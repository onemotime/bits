import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProfileStatus from './ProfileStatus';
import ProgressHabit from './ProgressHabit';
import CompletedHabit from './CompletedHabit';
import Calendar from './Calendar';

const Profile = ({ userInfo, email, imageUri }) => {
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
        email={email}
        imageUri={imageUri}
        userInfo={userInfo}
        handleActingPress={actingHabitPressed}
        handleCompletePress={completeHabitPressed}
        handleCalendarPress={calendarPressed}
      />
      <View style={styles.profileBottomWrapper}>
        {isActingHabitOn &&
          userInfo.habits.length > 0
            ? <ProgressHabit userInfo={userInfo} />
            : !isCompletedHabitOn &&
            <View style={styles.registerHabitWrapper}>
              <View>
                <Text style={styles.registerHabitText}>등록된 습관이 없습니다</Text>
              </View>
            </View>}
        {isCompletedHabitOn &&
          userInfo.completedHabits.length > 0
            ? <CompletedHabit userInfo={userInfo} />
            : !isActingHabitOn &&
              <View style={styles.completeHabitWrapper}>
                <View>
                  <Text style={styles.completeHabitText}>완료된 습관이 없습니다</Text>
                </View>
              </View>}
        {isCalendarOn &&
          <Calendar />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    backgroundColor: 'white',
    borderWidth: 1,
    flexGrow: 0.7,
  },
  profileBottomWrapper: {
    borderWidth: 1,
    top: 15
  },
  registerHabitWrapper: {
    borderWidth: 1,
    height: '72.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerHabitText: {
    fontSize: 15,
    fontWeight: '800',
    margin: 4
  },
  completeHabitWrapper: {
    borderWidth: 1,
    height: '72.5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  completeHabitText: {
    fontWeight: '800'
  }
});

export default Profile;
