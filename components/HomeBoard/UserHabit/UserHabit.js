import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import pickImgByType from '../../../utils/pickIconByType';
import pickTextByType from '../../../utils/pickTextByType';
import { Feather, Entypo } from '@expo/vector-icons';

import styles from './styles';

const UserHabit = ({
  habits,
  onAddPress,
  onIconPress,
  onDeletePress,
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
                  onPress={() => onIconPress(index)}
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
                  <TouchableOpacity onPress={() => onDeletePress(index)}>
                    <Feather name='x-circle' size={20} color='black' />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <TouchableOpacity onPress={onAddPress} style={styles.addBtnWrapper}>
        <Entypo name='circle-with-plus' size={24} color='white' />
      </TouchableOpacity>
    </View>
  );
};

export default UserHabit;
