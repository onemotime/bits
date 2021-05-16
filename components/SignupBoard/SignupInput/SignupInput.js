import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const SignupInput = ({
  email,
  userName,
  password,
  confirmPassword,
  onEmailChange,
  onUserNameChange,
  onPasswordChange,
  onConfirmChange
}) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.idInputWrapper}>
        <View style={styles.idTextWrapper}>
          <Text style={styles.idText}>EMAIL</Text>
        </View>
        <View style={styles.idTextInputWrapper}>
          <TextInput
            placeholder={'아이디를 입력해주세요'}
            value={email}
            onChangeText={onEmailChange}
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
            onChangeText={onUserNameChange}
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
            onChangeText={onPasswordChange}
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
            onChangeText={onConfirmChange}
          />
        </View>
      </View>
    </View>
  );
};

export default SignupInput;
