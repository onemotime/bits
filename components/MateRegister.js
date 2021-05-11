import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchUser } from '../redux/userSlice';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const MateRegister = ({ email }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleMateRegisterPress = () => {
    dispatch(fetchUser(email));
    navigation.navigate('검색');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.mateRegisterWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.registerText}>등록된 메이트가 없습니다</Text>
          <Text style={styles.registerText}>새로운 메이트를 추가해보세요</Text>
        </View>
        <TouchableOpacity onPress={handleMateRegisterPress}>
          <Entypo name="circle-with-plus" size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
