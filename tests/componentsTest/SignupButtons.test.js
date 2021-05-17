import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignupButtons from '../../components/SignupBoard/SignupButtons/SignupButtons';
import { STRINGS } from '../../constants/index';

describe('Signup buttons component', () => {
  it ('Should render login signup text', () => {
    const { queryByText } = render(<SignupButtons />);

    expect(queryByText(STRINGS.LOGIN)).not.toBeNull();
    expect(queryByText(STRINGS.SIGNUP)).not.toBeNull();
  });

  it ('Should response when login, signup button pressed', () => {
    const mockFunc = jest.fn();
    const mockFunc2 = jest.fn();
    const { getByTestId } = render(<SignupButtons
      onLoginPress={mockFunc}
      onSignupPress={mockFunc2}
    />);

    const loginButton = getByTestId(STRINGS.LOGIN_EN);
    const signupButton = getByTestId(STRINGS.SIGNUP_EN);

    fireEvent.press(loginButton);
    fireEvent.press(signupButton);

    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(mockFunc2).toHaveBeenCalledTimes(1);
  });
});
