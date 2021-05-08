import React from 'react';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import pickImgByType from '../utils/pickImgByType';
import pickTextByType from '../utils/pickTextByType';

const Profile = () => {
  const mockData = [
    {
      habit: [ { type: 'weight' }, { type: 'read' }, { type: 'swim' }, { type: 'weight' }, { type: 'read' }, { type: 'swim' } ],
      name: 'choy'
    }
  ];

  const handleRegisterHabitPress = () => {};

  return (
    <View style={styles.profileWrapper}>
      <View style={styles.profileTopWrapper}>
        <TouchableOpacity>
          <EvilIcons name="user" size={100} color="black" style={styles.img}/>
        </TouchableOpacity>
        <View style={styles.actMateWrapper}>
          <View style={styles.actWrapper}>
            <Text style={styles.actText}>Act</Text>
            <Text style={styles.actCountText}>05</Text>
          </View>
          <View style={styles.mateWrapper}>
            <Text style={styles.mateText}>Mate</Text>
            <Text style={styles.mateCountText}>130</Text>
          </View>
        </View>
        <View style={styles.doneStatusWrapper}>
          <TouchableOpacity>
            <Text style={styles.statusText}>진행중</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.statusText}>완료</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divideLine} />
      </View>
      <View style={styles.profileBottomWrapper}>
        {mockData[0].habit.length > 0
          ? <ScrollView style={styles.scrollView}>
              {mockData[0].habit.map(userHabit => {
                const habitImg = pickImgByType(userHabit.type);
                const habitText = pickTextByType(userHabit.type);

                return (
                  <TouchableOpacity style={styles.userHabitWrapper}>
                    <View style={styles.imgTextWrapper}>
                      <View style={styles.habitImgWrapper}>
                        {habitImg}
                      </View>
                      <View style={styles.habitTypeTextWrapper}>
                        <Text style={styles.habitTypeText}>{habitText}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          : <View style={styles.registerHabitWrapper}>
              <View><Text style={styles.registerHabitText}>등록된 습관이 없습니다</Text></View>
              <View><Text style={styles.registerHabitText}>새로운 습관을 등록해주세요</Text></View>
              <TouchableOpacity style={styles.followButton} onPress={handleRegisterHabitPress}>
                <Entypo name="circle-with-plus" size={35} color='#E8BE64' />
              </TouchableOpacity>
            </View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    backgroundColor: 'white',
    borderWidth: 1,
    flexGrow: 0.7,
  },
  profileTopWrapper: {
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  actMateWrapper: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '45%'
  },
  actWrapper: {
    alignItems: 'center'
  },
  actText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#E0A935',
    padding: 5
  },
  actCountText: {
    color: '#E0A935'
  },
  mateWrapper: {
    alignItems: 'center'
  },
  mateText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#E0A935',
    padding: 5
  },
  mateCountText: {
    color: '#E0A935'
  },
  doneStatusWrapper: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  statusText: {
    fontSize: 12,
    color: '#E0A935'
  },
  divideLine: {
    borderWidth: 1,
    borderColor: '#E0A935',
    width: '80%'
  },
  profileBottomWrapper: {
    borderWidth: 1,
    top: 15
  },
  scrollView: {
    borderWidth: 1,
    height: 300
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
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
    marginLeft: 20,
  },
  registerHabitWrapper: {
    borderWidth: 1,
    borderColor: 'red',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerHabitText: {
    fontSize: 15,
    fontWeight: '700',
    margin: 4
  },
  followButton: {
    marginTop: 20
  }
});

export default Profile;
