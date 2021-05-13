import React from 'react';
import { View, StyleSheet } from 'react-native';

import SettingHabit from '../../components/SettingHabitBoard/SettingHabit';

const RegisterHabit = () => {
  return (
    <View style={styles.wrapper}>
      <SettingHabit />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#E8BE64'
  }
});

export default RegisterHabit;
