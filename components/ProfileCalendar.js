import React from 'react';
import {Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['January','Feburary','March','April','May','June','July','August','September','October','November','December'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
};

LocaleConfig.defaultLocale = 'fr';

const ProfileCalendar = () => {

  return (
    <Calendar
      theme={{
        textMonthFontWeight: 'bold',
        textDayFontSize: 12,
        textDayFontWeight: '500',
      }}
    />
  );
};

export default ProfileCalendar;
