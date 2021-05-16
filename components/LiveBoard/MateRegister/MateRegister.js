import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { NAMES, SIZES, COLORS, STRINGS } from '../../../constants/index';

import styles from './styles';

const MateRegister = () => {
  const navigation = useNavigation();

  const handleMateRegisterPress = () => {
    navigation.navigate(STRINGS.SEARCH);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.mateRegisterWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.registerText}>{STRINGS.NO_REGISTERED_MATE}</Text>
          <Text style={styles.registerText}>{STRINGS.FOLLOW_NEW_MATE}</Text>
        </View>
        <TouchableOpacity onPress={handleMateRegisterPress}>
          <Entypo
            name={NAMES.CIRCLE_PLUS_ICON}
            size={SIZES.CIRCLE_PLUS_ICON}
            color={COLORS.WHITE}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MateRegister;
