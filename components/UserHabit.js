import React from 'react';
import { Feather, Entypo } from '@expo/vector-icons';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import pickImgByType from '../utils/pickIconByType';
import pickTextByType from '../utils/pickTextByType';

const UserHabit = ({ habits, handlePress, handlePressX }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.userHabitWrapper}>
        <ScrollView horizontal={true}>
          {habits.map((data, index) => {
            const caculatedNumber = Math.floor(data.achivedDay / data.settedDay * 100);
            const icon = pickImgByType(data.habitType);
            const habitName = pickTextByType(data.habitType);

            return (
              <View style={styles.habitInfoWrapper} key={index}>
                <View style={styles.iconWrapper}>
                  {icon}
                </View>
                <View style={styles.habitInfo}>
                  <View style={styles.habbitName}>
                    <Text style={styles.name}>{habitName}</Text>
                  </View>
                  <View style={styles.dayMateLike}>
                    <Text style={styles.day}>Day {data.achivedDay} / {data.settedDay}</Text>
                    <Text style={styles.mate}>Mate {data.mate}</Text>
                    <Text style={styles.like}>Like {data.like}</Text>
                    <Text style={styles.status}>Status {caculatedNumber}%</Text>
                  </View>
                </View>
                <View style={styles.cancelWrapper}>
                  <TouchableOpacity onPress={() => handlePressX(index)}>
                    <Feather name="x-circle" size={20} color="black" />
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
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250
  },
  userHabitWrapper: {
    borderWidth: 1,
    width: '80%',
    height: '60%',
    borderRadius: 10,
    backgroundColor: '#F3E1B8'
  },
  habitInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  iconWrapper: {
    borderWidth: 1,
    backgroundColor: '#E5B75C',
    borderRadius: 10,
    padding: 15,
    marginLeft: 10,
  },
  habitInfo: {
    borderWidth: 1,
    height: '80%',
    justifyContent: 'space-evenly',
    marginLeft: 20
  },
  habbitName: {
    borderWidth: 1
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
  },
  addBtnWrapper: {
    borderWidth: 1,
    top: 15
  }
});

export default UserHabit;
