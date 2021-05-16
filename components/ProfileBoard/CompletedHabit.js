import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import pickIconByType from '../../utils/pickIconByType';
import pickTextByType from '../../utils/pickTextByType';
import pickColorByCount from '../../utils/pickColorByCount';

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

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%'
  },
  userHabitWrapper: {
    backgroundColor: '#E8C06C',
    borderRadius:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    margin: 10
  },
  imgTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  habitTypeTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  habitTypeText: {
    fontWeight: '800',
    fontSize: 18,
    color: 'white',
    marginLeft: 30,
  },
  completeCountWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CompletedHabit;
