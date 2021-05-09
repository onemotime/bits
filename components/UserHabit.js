import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import pickImgByType from '../utils/pickIconByType';
import pickTextByType from '../utils/pickTextByType';

const UserHabit = ({ habits }) => {
  const handleCancelPress = (deleteIndex) => {};

  return (
    <View style={styles.userHabitWrapper}>
      <ScrollView horizontal={true}>
        {habits.map((data, index) => {
          const caculatedNumber = Math.floor(data.count / data.day * 100);
          const icon = pickImgByType(data.habitType);
          const habitName = pickTextByType(data.habitType);

          return (
            <View style={styles.habitInfoWrapper} key={index}>
              <View>
                {icon}
              </View>
              <View style={styles.habitInfo}>
                <View style={styles.habbitName}>
                  <Text style={styles.name}>{habitName}</Text>
                </View>
                <View style={styles.dayMateLike}>
                  <Text style={styles.day}>Day {data.count} / {data.day}</Text>
                  <Text style={styles.mate}>Mate {data.mate}</Text>
                  <Text style={styles.like}>Like {data.like}</Text>
                  <Text style={styles.status}>Status {caculatedNumber}%</Text>
                </View>
              </View>
              <View style={styles.cancelWrapper}>
                <TouchableOpacity onPress={() => handleCancelPress(index)}>
                  <Feather name="x-circle" size={22} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  userHabitWrapper: {
    borderWidth: 1,
    width: '80%',
    height: '30%',
    borderRadius: 10,
    backgroundColor: '#F3E1B8'
  },
  habitInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  habitInfo: {
    borderWidth: 1,
    height: '80%',
    justifyContent: 'space-evenly',
    marginLeft: 20
  },
  habbitName: {
    borderWidth: 1,
    alignItems: 'center'
  },
  name: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20
  },
  dayMateLike: {
    borderWidth: 1,
    justifyContent: 'space-evenly',
    height: '60%'
  },
  day: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
  mate: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
  like: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
  status: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
  cancelWrapper: {
    justifyContent: 'flex-start',
    height: '90%',
    marginLeft: 10
  }
});

export default UserHabit;
