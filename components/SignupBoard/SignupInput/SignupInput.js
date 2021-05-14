import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
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
  }
});

export default SignupInput;
