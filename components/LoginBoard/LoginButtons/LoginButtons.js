import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { STRINGS } from '../../../constants/index';

import styles from './styles';

const LoginButtons = ({
  onLoginPress,
  onSingupPress
}) => {

  return (
    <View style={styles.loginBtnWrapper}>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={onLoginPress}
        testID={STRINGS.LOGIN_EN}
      >
        <Text style={styles.loginText}>
          {STRINGS.LOGIN}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupBtn}
        onPress={onSingupPress}
        testID={STRINGS.SIGNUP_EN}
      >
        <Text style={styles.signupText}>
          {STRINGS.SIGNUP}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButtons;
