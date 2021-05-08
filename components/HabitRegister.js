import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HabitRegister = () => {
  const handleRegisterHabitPress = () => {
    // 습관 등록 시, 습관 등록 화면으로 이동하기
    // 습관 등록 완료 후, 다시 홈 페이지로 돌아가게 만들기
  };

  return (
    <View style={styles.mainTopWrapper}>
      <View style={styles.habitRegisterWrapper}>
        <View style={styles.textButtonWrapper}>
          <View stlye={styles.registerTextWrapper}>
            <Text style={styles.registerText}>습관을 등록해주세요</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={handleRegisterHabitPress}>
              <Entypo name="circle-with-plus" size={24} color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTopWrapper: {
    flexGrow: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  habitRegisterWrapper: {
    backgroundColor: '#EDCD88',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '25%',
    borderRadius: 10,
    flexGrow: 0.8
  },
  textButtonWrapper: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  registerText: {
    fontWeight: '900',
    color: 'white',
    fontSize: 15
  }
});

export default HabitRegister;
