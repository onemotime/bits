import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import pickIconByType from '../../../utils/pickIconByType';
import pickTextByType from '../../../utils/pickTextByType';
import pickColorByCount from '../../../utils/pickColorByCount';

import styles from './styles';

const CompletedHabit = ({ userInfo }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {userInfo.completedHabits.map((habit, index) => {
        const habitIcon = pickIconByType(habit.habitType);
        const habitText = pickTextByType(habit.habitType);
        const colorType = pickColorByCount(habit.completeCount)

        return (
          <View
            style={styles.userHabitWrapper}
            key={index}
          >
            <View style={styles.imgTextWrapper}>
              <View>
                {habitIcon}
              </View>
              <View style={styles.habitTypeTextWrapper}>
                <Text style={styles.habitTypeText}>{habitText}</Text>
              </View>
            </View>
            <View style={styles.completeCountWrapper}>
              {habit.completeCount < 4
                ? <FontAwesome5
                    name='medal'
                    size={30}
                    color={colorType}
                  />
                : <FontAwesome5
                    name='crown'
                    size={24}
                    color='#2f3640'
                  />}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CompletedHabit;