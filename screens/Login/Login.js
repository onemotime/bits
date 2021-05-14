import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignin } from '../../redux/userSlice';
import { View,  TouchableOpacity, StyleSheet } from 'react-native';

import Loading from '../Loading/Loading';
import LogoName from '../../components/shared/LogoName';
import LoginInput from '../../components/LoginBoard/LoginInput/LoginInput';
import LoginButtons from '../../components/LoginBoard/LoginButtons/LoginButtons';

import {
  GoogleIcon,
  FacebookIcon,
  InstagramIcon
} from '../../assets/svgs/icon';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isFetching } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLoginPress = () => {
    if (email.length === 0 || password.length === 0) return;

    const loginInput = {
      email,
      password
    };

    dispatch(fetchSignin(loginInput));
  };

  const handleSingupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <>
      {isFetching
        ? <Loading />
        : <View style={styles.wrapper}>
            <View style={styles.loginWrapper}>
              <LogoName />
              <LoginInput
                email={email}
                onEmailChange={setEmail}
                password={password}
                onPasswordChange={setPassword}
              />
              <LoginButtons
                onLoginPress={handleLoginPress}
                onSingupPress={handleSingupPress}
              />
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
          </View>}
    </>
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
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20
  }
});

export default Login;
