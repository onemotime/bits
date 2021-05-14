import generateHeaderOption from '../utils/generateHeaderOption';
import { SERVER_URL } from '@env';

export const getFollowingHabits = async (accessToken) => {
  const url = `${SERVER_URL}/user/following`;
  const headers = generateHeaderOption(accessToken);

  const response = await fetch(url, {
    method: 'GET',
    headers
  });

  return await response.json();
};
