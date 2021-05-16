import React, { useState, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import { useDispatch } from 'react-redux';
import { userSlice } from '../redux/userSlice';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { useSelector } from 'react-redux';

import AutchStackNavigator from './AuthStackNavigator';
import UserScreenNavigator from './UserScreenNavigator';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const MainStackNavigator = () => {
  const { accessToken } = useSelector(state => state.user);
  const { registerPushToken } = userSlice.actions;
  const dispatch = useDispatch();
  // const [notification, setNotification] = useState(false);
  // const notificationListener = useRef();
  // const responseListener = useRef();

  useEffect(() => {
    const subscribeNotification = async () => {
      try {
        const pushToken = await registerForPushNotificationsAsync();

        if (pushToken) {
          dispatch(registerPushToken({ pushToken }));
        }

        // notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        //   console.log(notification);
        //   setNotification(notification);
        // });

        // responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        //   console.log(response);
        // });

        // return () => {
        //   Notifications.removeNotificationSubscription(notificationListener.current);
        //   Notifications.removeNotificationSubscription(responseListener.current);
        // };
      } catch(err) {
        console.log(err);
      }
    };

    subscribeNotification();
  }, []);

  const registerForPushNotificationsAsync = async () => {
    let token;

    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }

      token = (await Notifications.getExpoPushTokenAsync()).data;

      return token;
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  }

  return (
    <>
      {accessToken
        ? <UserScreenNavigator />
        : <AutchStackNavigator />}
    </>
  );
};

export default MainStackNavigator;
