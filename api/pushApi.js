import { ROUTES } from '../constants/index';

export const sendPushNotification = async (expoPushToken, bodyMessage) => {

  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Bits',
    body: bodyMessage
  };

  await fetch(ROUTES.PUSH_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
};
