import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const SignupScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.signupWrapper}>
        <View style={styles.logoWrapper}>
          <FontAwesome name="heartbeat" size={24} color="white" />
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
          <View style={styles.confirmInputWrapper}>
            <View style={styles.confirmTextWrapper}>
              <Text style={styles.confirmText}>PW2</Text>
            </View>
            <View style={styles.confirmTextInputwrapper}>
              <TextInput placeholder={'비밀번호를 확인해주세요'} />
            </View>
          </View>
        </View>
        <View style={styles.signupBtnWrapper}>
          <TouchableOpacity style={styles.signupBtn}>
            <Text style={styles.signupText}>회원가입</Text>
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
  signupWrapper: {
    backgroundColor: '#EDCE8A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row'
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 10
  },
  inputWrapper: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'space-evenly',
  },
  idInputWrapper: {
    backgroundColor: '#FAF0DB',
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
  confirmInputWrapper: {
    backgroundColor: '#FAF0DB',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 200,
    height: 35
  },
  confirmTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmText: {
    color: '#E4B356',
    fontWeight: '700'
  },
  confirmTextInputwrapper: {
    width: '80%',
    textAlign: 'center',
    justifyContent: 'center'
  },
  signupBtnWrapper: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default SignupScreen;
