import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  loginBtnWrapper: {
    width: '100%',
    height:70,
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
  },
  loginText: {
    color: 'white',
    fontWeight: '600'
  }
});

export default LoginButtons;
