import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { STRINGS } from '../../../constants/index';

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
            placeholder={STRINGS.TYPE_EMAIL}
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
            placeholder={STRINGS.TYPE_USERNAME}
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
            placeholder={STRINGS.TYPE_PASSWORD}
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
            placeholder={STRINGS.TYPE_CONFIRM_PASSWORD}
            value={confirmPassword}
            onChangeText={onConfirmChange}
          />
        </View>
      </View>
    </View>
  );
};

export default SignupInput;
