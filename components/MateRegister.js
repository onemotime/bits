import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MateRegister = () => {
  return (
    <View style={styles.mateRegisterWrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.registerText}>등록된 메이트가 없습니다</Text>
        <Text style={styles.registerText}>새로운 메이트를 추가해보세요</Text>
      </View>
      <TouchableOpacity>
        <Entypo name="circle-with-plus" size={24} color='white' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mateRegisterWrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#EDCD88',
    width: '80%',
    height: '30%',
    borderRadius: 10
  },
  textWrapper: {
    alignItems: 'center'
  },
  registerText: {
    fontWeight: '900',
    color: 'white',
    padding: 10,
    fontSize: 15
  }
});

export default MateRegister;
