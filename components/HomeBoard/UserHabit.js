import React from 'react';
import { Feather, Entypo } from '@expo/vector-icons';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import pickImgByType from '../../utils/pickIconByType';
import pickTextByType from '../../utils/pickTextByType';

const UserHabit = ({
  habits,
  handlePress,
  handleIconPress,
  handlePressX,
  isHabitSelected,
  targetHabit
}) => {

  return (
    <View style={styles.wrapper}>
      <View style={styles.userHabitWrapper}>
        <ScrollView horizontal={true}>
          {habits.map((data, index) => {
            const statusPercentage = Math.floor(data.achivedDay / data.settedDay * 100);
            const icon = pickImgByType(data.habitType, isHabitSelected, targetHabit?.habitType);
            const habitName = pickTextByType(data.habitType);

            return (
              <View style={styles.habitInfoWrapper} key={index}>
                <TouchableOpacity
                  onPress={() => handleIconPress(index)}
                >
                  <View style={styles.iconWrapper}>
                    {icon}
                  </View>
                </TouchableOpacity>
                <View style={styles.habitInfo}>
                  <View style={styles.habbitName}>
                    <Text style={styles.name}>{habitName}</Text>
                  </View>
                  <View style={styles.dayMateLike}>
                    <Text style={styles.day}>Day {data.achivedDay} / {data.settedDay}</Text>
                    <Text style={styles.mate}>Mate {data.mate}</Text>
                    <Text style={styles.like}>Like {data.like}</Text>
                    <Text style={styles.status}>Status {statusPercentage}%</Text>
                  </View>
                </View>
                <View style={styles.cancelWrapper}>
                  <TouchableOpacity onPress={() => handlePressX(index)}>
                    <Feather name='x-circle' size={20} color='black' />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.addBtnWrapper}>
        <Entypo name="circle-with-plus" size={24} color='white' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  userHabitWrapper: {
    width: '80%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: '#FACC7D'
  },
  habitInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 255
  },
  iconWrapper: {
    backgroundColor: '#F9BC56',
    borderRadius: 10,
    padding: 20,
    marginLeft: 10,
  },
  habitInfo: {
    height: '80%',
    justifyContent: 'space-evenly',
    marginLeft: 20
  },
  name: {
    color: 'white',
    fontWeight: '900',
    fontSize: 30
  },
  dayMateLike: {
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
  },
  addBtnWrapper: {
    top: 15
  }
});

export default UserHabit;
