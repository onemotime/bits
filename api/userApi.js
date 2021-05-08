import { SERVER_URL } from 'react-native-dotenv';

export const requestSignin = async (loginInput) => {
  const url = `${SERVER_URL}/user/signin`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signinInput)
  });

  return await response.json();
};

export const requestSignup = async (signupInput) => {
  const url =`${SERVER_URL}/user/signup`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signupInput)
  });
};
