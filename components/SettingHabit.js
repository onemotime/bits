import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';

const SettingHabit = () => {
  return (
    <View style={styles.subscribeWrapper}>
      <Text style={styles.subscribeText}>습관을 등록해주세요</Text>
      <View style={styles.inputWrapper}>
        <View style={styles.actInput}>
          <Text style={styles.actText}>Act</Text>
          <TextInput style={styles.actInputText} placeholder='습관명을 설정해주세요' />
        </View>
        <View style={styles.dayInput}>
          <Text style={styles.dayText}>Day</Text>
          <TextInput style={styles.dayInputText} placeholder='목표일을 설정해주세요' />
        </View>
        <View style={styles.timeInput}>
          <Text style={styles.timeText}>Time</Text>
          <TextInput style={styles.timeTextInput} placeholder='반복시간을 설정해주세요' />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title='설정' color='white' />
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '20%',
    borderRadius: 5
  },
  actText: {
    position: 'absolute',
    left: 20,
    fontWeight: '800',
    marginRight: 10,
    color: '#E4B356'
  },
  actInputText: {
    left: 20
  },
  dayInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '20%',
    borderRadius: 5
  },
  dayText: {
    position: 'absolute',
    left: 20,
    fontWeight: '800',
    marginRight: 10,
    color: '#E4B356'
  },
  dayInputText: {
    left: 20
  },
  timeInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '20%',
    borderRadius: 5
  },
  timeText: {
    position: 'absolute',
    left: 12,
    fontWeight: '800',
    marginRight: 10,
    color: '#E4B356'
  },
  timeTextInput: {
    left: 20
  },
  buttonWrapper: {
    width: '40%',
    borderRadius: 8,
    backgroundColor: '#D68C43'
  }
});

export default SettingHabit;
