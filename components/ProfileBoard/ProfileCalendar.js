import React from 'react';
import { View, Text } from 'react-native';
import {Calendar, LocaleConfig } from 'react-native-calendars';
import { AntDesign } from '@expo/vector-icons';

LocaleConfig.locales['fr'] = {
  monthNames: ['January','Feburary','March','April','May','June','July','August','September','October','November','December'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
};

LocaleConfig.defaultLocale = 'fr';

const ProfileCalendar = ({ completedDates }) => {

  return (
    <Calendar
      theme={{
        arrowColor: '#F9BC56',
        textMonthFontWeight: 'bold',
        textDayFontSize: 12
      }}
      dayComponent={({date, state}) => {
        return (
          <View>
            <Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>
              {completedDates.includes(`${date.year}-${date.month}-${date.day}`)
                ?  <AntDesign name='checksquare' size={20} color='#4cd137' />
                :  date.day}
            </Text>
          </View>
        );
      }}
    />
  );
};

export default ProfileCalendar;
