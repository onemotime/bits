import { SERVER_URL } from '@env';
import generateHeaderOption from '../utils/generateHeaderOption';

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
  const headers = generateHeaderOption(registerInput.accessToken);

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(registerInput)
  });

  return await response.json();
};

export const patchHabit = async (updateInput) => {
  const url = `${SERVER_URL}/habit`;
  const headers = generateHeaderOption(updateInput.accessToken);

  const response = await fetch(url, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(updateInput)
  });

  return await response.json();
};

export const deleteHabit = async (deleteInput) => {
  const url = `${SERVER_URL}/habit`;
  const headers = generateHeaderOption(deleteInput.accessToken);

  const response = await fetch(url, {
    method: 'DELETE',
    headers,
    body: JSON.stringify({
      targetIndex: deleteInput.targetIndex
    })
  });

  return await response.json();
};

export const getUsers = async (accessToken) => {
  const url = `${SERVER_URL}/user/all`;
  const headers = generateHeaderOption(accessToken);

  const response = await fetch(url, {
    method: 'GET',
    headers
  });

  return await response.json();
};

export const patchUserFollow = async (followingInfo) => {
  const url = `${SERVER_URL}/user/follow`;
  const headers = generateHeaderOption(followingInfo.accessToken);

  const response = await fetch(url, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      followId: followingInfo.followId
    })
  });

  return await response.json();
};

export const patchImageUri = async (imageUriPayload) => {
  const url = `${SERVER_URL}/user/image`;
  const headers = generateHeaderOption(imageUriPayload.accessToken);

  const response = await fetch(url, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      uri: imageUriPayload.uri
    })
  });

  return await response.json();
};

export const getPushTokens = async (accessToken) => {
  const url = `${SERVER_URL}/user/pushTokens`;
  const headers = generateHeaderOption(accessToken);

  const response = await fetch(url, {
    method: 'GET',
    headers
  });

  return await response.json();
};
