import React from 'react';
import { render } from '@testing-library/react-native';
import LoginButtons from '../../components/LoginBoard/LoginButtons/LoginButtons';

it('Should have 로그인, 회원가입 text', () => {
  const { queryByText } = render(<LoginButtons />);

  expect(queryByText('로그인')).not.toBeNull();
  expect(queryByText('회원가입')).not.toBeNull();
});
