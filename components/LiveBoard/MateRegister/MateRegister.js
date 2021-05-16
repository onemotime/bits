import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import styles from './styles';

const MateRegister = () => {
  const navigation = useNavigation();

  const handleMateRegisterPress = () => {
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
          <Entypo name='circle-with-plus' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MateRegister;
