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
        <Entypo name="circle-with-plus" size={24} color='#E8BE64' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mateRegisterWrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '60%',
    flexGrow: 8
  },
  textWrapper: {
    alignItems: 'center'
  },
  registerText: {
    fontWeight: '600',
    padding: 10
  }
});

export default MateRegister;
