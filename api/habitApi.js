import { SERVER_URL } from '@env';

export const getFollowingHabits = async (userEmail) => {
  // 나중에 토큰 헤더에 넣고 GET 메서드로 변환해야 함
  const url = `${SERVER_URL}/user/following`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: userEmail })
  });

  return await response.json();
};
