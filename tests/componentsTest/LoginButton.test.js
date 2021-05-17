import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginButtons from '../../components/LoginBoard/LoginButtons/LoginButtons';
import { NUMBERS, STRINGS } from '../../constants/index';


describe('LoginButton component', () => {
  it ('Should have 로그인, 회원가입 text', () => {
    const { queryByText } = render(<LoginButtons />);

    expect(queryByText(STRINGS.LOGIN)).not.toBeNull();
    expect(queryByText(STRINGS.SIGNUP)).not.toBeNull();
  });

  it ('Should response when login button preesed', () => {
    const mockFunc = jest.fn();
    const { queryByTestId } = render(<LoginButtons onLoginPress={mockFunc} />);
    const loginButton = queryByTestId(STRINGS.LOGIN_EN);

    fireEvent.press(loginButton);

    expect(mockFunc).toHaveBeenCalledTimes(NUMBERS.ONE);
  });

  it ('Should response when login button preesed', () => {
    const mockFunc = jest.fn();
    const { queryByTestId } = render(<LoginButtons onSingupPress={mockFunc} />);
    const signupButton = queryByTestId(STRINGS.SIGNUP_EN);

    fireEvent.press(signupButton);

    expect(mockFunc).toHaveBeenCalledTimes(NUMBERS.ONE);
  });
});
