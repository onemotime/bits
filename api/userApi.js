import { SERVER_URL } from '@env';

export const requestSignin = async (loginInput) => {
  const url = `${SERVER_URL}/user/login`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInput)
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

  return await response.json();
};

export const postHabit = async (registerInput) => {
  const url = `${SERVER_URL}/habit`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registerInput)
  });

  return await response.json();
};
