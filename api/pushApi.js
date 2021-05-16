export const sendPushNotification = async (expoPushToken, bodyMessage) => {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Bits',
    body: bodyMessage
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
};
