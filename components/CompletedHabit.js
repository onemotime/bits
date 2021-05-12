import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import pickIconByType from '../utils/pickIconByType';
import pickTextByType from '../utils/pickTextByType';

const CompletedHabit = ({ userInfo }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {userInfo.completedHabits.map((habitType, index) => {
        const habitIcon = pickIconByType(habitType);
        const habitText = pickTextByType(habitType);

        return (
          <View style={styles.userHabitWrapper} key={index}>
            <View style={styles.imgTextWrapper}>
              <View>
                {habitIcon}
              </View>
              <View style={styles.habitTypeTextWrapper}>
                <Text style={styles.habitTypeText}>{habitText}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    borderWidth: 1,
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
  }
});

export default CompletedHabit;
