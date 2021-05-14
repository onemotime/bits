import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as userAPI from '../../api/userApi';

import LogoName from '../../components/shared/LogoName';
import SignupInput from '../../components/SignupBoard/SignupInput/SignupInput';
import SignupButtons from '../../components/SignupBoard/SignupButtons/SignupButtons';

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
        <LogoName />
        <SignupInput
          email={email}
          userName={userName}
          password={password}
          confirmPassword={confirmPassword}
          onEmailChange={setEmail}
          onUserNameChange={setUserName}
          onPasswordChange={setPassword}
          onConfirmChange={setConfirmPassword}
        />
        <SignupButtons
          onLoginPress={handleLoginPress}
          onSignupPress={handleSingupPress}
        />
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
  }
});

export default Signup;
