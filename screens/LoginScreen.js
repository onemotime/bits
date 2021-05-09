import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSignin } from '../redux/userSlice';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {
  GoogleIcon,
  FacebookIcon,
  InstagramIcon,
} from '../assets/svgs/icon';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLoginPress = () => {
    console.log('login press working');
    if (email.length === 0 || password.length === 0) return;

    const signinInput = {
      email,
      password
    };

    dispatch(fetchSignin(signinInput));
  };

  const handleSingupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.loginWrapper}>
        <View style={styles.logoWrapper}>
          <FontAwesome name="heartbeat" size={24} color="white" />
          <Text style={styles.logoText}>BiTS</Text>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.idInputWrapper}>
            <View style={styles.idTextWrapper}>
              <Text style={styles.idText}>Email</Text>
            </View>
            <View style={styles.idTextInputWrapper}>
              <TextInput
                placeholder={'아이디를 입력해주세요'}
                value={email}
                onChangeText={setEmail}
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
        </View>
        <View style={styles.loginBtnWrapper}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLoginPress}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupBtn} onPress={handleSingupPress}>
            <Text style={styles.signupText}>회원가입</Text>
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
    alignItems: 'center',
    backgroundColor: '#E8BE64'
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
    height: 120,
    justifyContent: 'space-evenly'
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
    width: 230,
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
