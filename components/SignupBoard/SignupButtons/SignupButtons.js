import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const SignupButtons = ({
  onLoginPress,
  onSignupPress
}) => {
  return (
    <View style={styles.signupBtnWrapper}>
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
        onPress={onSignupPress}
      >
        <Text style={styles.signupText}>
          회원가입
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupButtons;
