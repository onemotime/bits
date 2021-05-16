import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const LoginInput = ({
  email,
  onEmailChange,
  password,
  onPasswordChange
}) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.idInputWrapper}>
        <View style={styles.idTextWrapper}>
          <Text style={styles.idText}>
            Email
          </Text>
        </View>
        <View style={styles.idTextInputWrapper}>
          <TextInput
            placeholder={'아이디를 입력해주세요'}
            value={email}
            onChangeText={onEmailChange}
          />
        </View>
      </View>
      <View style={styles.pwInputWrapper}>
        <View style={styles.pwTextWrapper}>
          <Text style={styles.pwText}>
            PW
          </Text>
        </View>
        <View style={styles.pwTextInputWrapper}>
          <TextInput
            placeholder={'비밀번호를 입력해주세요'}
            value={password}
            onChangeText={onPasswordChange}
          />
        </View>
      </View>
  </View>
  );
};

export default LoginInput;
