import React from 'react';
import { render } from '@testing-library/react-native';
import LoginInput from '../../components/LoginBoard/LoginInput/LoginInput';

it('Should have email, password input', () => {
  const { getByPlaceholderText } = render(<LoginInput />);

  const emailTextInput = getByPlaceholderText('아이디를 입력해주세요');
  const passwordTextInput = getByPlaceholderText('비밀번호를 입력해주세요');


  expect(emailTextInput).toBeDefined();
  expect(passwordTextInput).toBeDefined();
});

it('Should render Email, PW text', () => {
  const { queryByText } = render(<LoginInput />);

  expect(queryByText('Email')).not.toBeNull();
  expect(queryByText('PW')).not.toBeNull();
});
