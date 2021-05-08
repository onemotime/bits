import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {
  GoogleIcon,
  FacebookIcon,
  InstagramIcon,
} from '../assets/svgs/icon';

const LoginScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.loginWrapper}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logoText}>BiTS</Text>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.idInputWrapper}>
            <View style={styles.idTextWrapper}>
              <Text style={styles.idText}>ID</Text>
            </View>
            <View style={styles.idTextInputWrapper}>
              <TextInput placeholder={'아이디를 입력해주세요'} />
            </View>
          </View>
          <View style={styles.pwInputWrapper}>
            <View style={styles.pwTextWrapper}>
              <Text style={styles.pwText}>PW</Text>
            </View>
            <View style={styles.pwTextInputWrapper}>
              <TextInput placeholder={'비밀번호를 입력해주세요'} />
            </View>
          </View>
        </View>
        <View style={styles.loginBtnWrapper}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity>
            <GoogleIcon size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FacebookIcon size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <InstagramIcon size={30} />
          </TouchableOpacity>
        </View>
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
  loginWrapper: {
    backgroundColor: '#EDCE8A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputWrapper: {
    alignItems: 'center',
    height: 100,
    borderWidth: 1,
    justifyContent: 'space-evenly',
  },
  idInputWrapper: {
    backgroundColor: '#FAF0DB',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 200,
    height: 35
  },
  idTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%'
  },
  idText: {
    color: '#E4B356',
    fontWeight: '700'
  },
  idTextInputWrapper: {
    width: '80%',
    textAlign: 'center',
    justifyContent: 'center'
  },
  pwInputWrapper: {
    backgroundColor: '#FAF0DB',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 200,
    height: 35
  },
  pwTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pwText: {
    color: '#E4B356',
    fontWeight: '700'
  },
  pwTextInputWrapper: {
    width: '80%',
    textAlign: 'center',
    justifyContent: 'center'
  },
  loginBtnWrapper: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    borderWidth: 1,
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
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20
  }
});

export default LoginScreen;
