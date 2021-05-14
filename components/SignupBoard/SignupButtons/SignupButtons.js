import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  signupBtnWrapper: {
    width: '100%',
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  loginBtn: {
    backgroundColor: '#D78A41',
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10
  },
  loginText: {
    color: 'white',
    fontWeight: '600'
  },
  signupBtn: {
    backgroundColor: '#D78A41',
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10
  },
  signupText: {
    color: 'white',
    fontWeight: '600'
  }
});

export default SignupButtons;
