import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import pickIconByType from '../../utils/pickIconByType';
import pickTextByType from '../../utils/pickTextByType';

const ProgressHabit = ({ userInfo }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {userInfo.habits.map(userHabit => {
        const habitIcon = pickIconByType(userHabit.habitType);
        const habitText = pickTextByType(userHabit.habitType);

        return (
          <TouchableOpacity style={styles.userHabitWrapper} key={userHabit._id}>
            <View style={styles.imgTextWrapper}>
              <View>
                {habitIcon}
              </View>
              <View style={styles.habitTypeTextWrapper}>
                <Text style={styles.habitTypeText}>
                  {habitText}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
    alignItems: 'center',
    height: 50
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

export default ProgressHabit;
