import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as userAPI from '../../api/userApi';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSingupPress = async () => {
    if (email.length === 0 || password.length === 0 || confirmPassword.length === 0) return;
    if (password !== confirmPassword) return;

    try {
      const signupInput = {
        email,
        userName,
        password
      };

      const response = await userAPI.requestSignup(signupInput);

      if (response.status === 201) {
        navigation.navigate('Login');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.signupWrapper}>
        <View style={styles.logoWrapper}>
          <FontAwesome name="heartbeat" size={24} color='white' />
          <Text style={styles.logoText}>BiTS</Text>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.idInputWrapper}>
            <View style={styles.idTextWrapper}>
              <Text style={styles.idText}>EMAIL</Text>
            </View>
            <View style={styles.idTextInputWrapper}>
              <TextInput
                placeholder={'아이디를 입력해주세요'}
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View style={styles.nameInputWrapper}>
            <View style={styles.nameTextWrapper}>
              <Text style={styles.nameText}>NAME</Text>
            </View>
            <View style={styles.nameTextInputWrapper}>
              <TextInput
                placeholder={'이름을 입력해주세요'}
                value={userName}
                onChangeText={setUserName}
              />
            </View>
          </View>
          <View style={styles.pwInputWrapper}>
            <View style={styles.pwTextWrapper}>
              <Text style={styles.pwText}>PW</Text>
            </View>
            <View style={styles.pwTextInputWrapper}>
              <TextInput
                placeholder={'비밀번호를 입력해주세요'}
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
          <View style={styles.confirmInputWrapper}>
            <View style={styles.confirmTextWrapper}>
              <Text style={styles.confirmText}>CHECK</Text>
            </View>
            <View style={styles.confirmTextInputwrapper}>
              <TextInput
                placeholder={'비밀번호를 확인해주세요'}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
          </View>
        </View>
        <View style={styles.signupBtnWrapper}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLoginPress}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupBtn} onPress={handleSingupPress}>
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
    alignItems: 'center',
    backgroundColor: '#E8BE64'
  },
  signupWrapper: {
    marginTop: '40%',
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
    width: 230,
    height: 35
  },
  idTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%'
  },
  idText: {
    color: '#E4B356',
    fontWeight: '700',
    fontSize: 12
  },
  idTextInputWrapper: {
    width: '80%',
    textAlign: 'center',
    justifyContent: 'center'
  },
  nameTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%'
  },
  nameText: {
    color: '#E4B356',
    fontWeight: '700',
    fontSize: 12
  },
  nameTextInputWrapper: {
    width: '80%',
    textAlign: 'center',
    justifyContent: 'center'
  },
  nameInputWrapper: {
    backgroundColor: '#FAF0DB',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 230,
    height: 35
  },
  pwInputWrapper: {
    backgroundColor: '#FAF0DB',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 230,
    height: 35
  },
  pwTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pwText: {
    color: '#E4B356',
    fontWeight: '700',
    fontSize: 12
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
    width: 230,
    height: 35
  },
  confirmTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmText: {
    color: '#E4B356',
    fontWeight: '700',
    fontSize: 12
  },
  confirmTextInputwrapper: {
    width: '80%',
    textAlign: 'center',
    justifyContent: 'center'
  },
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

export default Signup;
