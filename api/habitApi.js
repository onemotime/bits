import { SERVER_URL } from '@env';
import generateHeaderOption from '../utils/generateHeaderOption';

export const getFollowingHabits = async (accessToken) => {
  const url = `${SERVER_URL}/user/following`;
  const headers = generateHeaderOption(accessToken);

  const response = await fetch(url, {
    method: 'GET',
    headers
  });

  return await response.json();
};

export const patchHabitLike = async (updateHabitInput) => {
  const url = `${SERVER_URL}/habit/like`;
  const headers = generateHeaderOption(updateHabitInput.accessToken);

  const response  = await fetch(url, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      habitId: updateHabitInput.habitId,
      userId: updateHabitInput.userId
    })
  });

  return await response.json();
};
