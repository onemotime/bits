import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const LoginButtons = ({ onLoginPress, onSingupPress }) => {
  return (
    <View style={styles.loginBtnWrapper}>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={onLoginPress}
      >
        <Text style={styles.loginText}>
          로그인
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupBtn}
        onPress={onSingupPress}
      >
        <Text style={styles.signupText}>
          회원가입
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButtons;
