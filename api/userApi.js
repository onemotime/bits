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

export const patchHabit = async (updateInput) => {
  const url = `${SERVER_URL}/habit`;

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateInput)
  });

  return await response.json();
};

export const deleteHabit = async (deleteInput) => {
  const url = `${SERVER_URL}/habit`;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(deleteInput)
  });

  return await response.json();
};

export const fetchUserName = async (email) => {
  // 나중 토큰 verify할 때 유저 이메일 대신 토큰 넣고 겟 요청 보내기
  const url = `${SERVER_URL}/user/all`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });

  return await response.json();
};

export const patchUserFollow = async (followingInfo) => {
  const url = `${SERVER_URL}/user/follow`;

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(followingInfo)
  });

  return await response.json();
};

export const patchImageUri = async (imageUriPayload) => {
  const url = `${SERVER_URL}/user/image`;

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(imageUriPayload)
  });

  return await response.json();
};
