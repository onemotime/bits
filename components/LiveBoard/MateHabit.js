import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { EvilIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { fetchFollowingHabits } from '../../redux/habitSlice';
import { ScrollView } from 'react-native-gesture-handler';
import pickIconByType from '../../utils/pickIconByType';

const MateHabit = ({ email, followingUserHabits, following }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFollowingHabits(email));
  }, []);

  useEffect(() => {
    dispatch(fetchFollowingHabits(email));
  }, [following]);

  const handleLikePress = () => {};

  return (
    <View style={styles.mateHabitWrapper}>
      <ScrollView>
        {followingUserHabits?.length > 0 &&
          followingUserHabits.map((followingUser, index) => {
            console.log('팔로잉 유저 이미지 유알아이 🌞' + followingUser.imageUri)
            return (
              <View style={styles.mateLivewrapper} key={followingUser.userName}>
                <View style={styles.profileImg}>
                  {followingUser.imageUri
                    ? <View style={styles.uriWrapper}>
                        <Image
                          source={{ uri: followingUser.imageUri }}
                          style={styles.profileUriImg}
                        />
                      </View>
                    : <EvilIcons
                        name="user" size={50}
                        color="black"
                        style={styles.img}
                      />}
                  <Text style={styles.name}>{followingUser.userName}</Text>
                </View>
                <ScrollView horizontal={true}>
                  {followingUser.habits.length > 0 &&
                    followingUser.habits.map(habitData => {
                      const habitIcon = pickIconByType(habitData.habitType);

                      return (
                        <TouchableOpacity onPress={handleLikePress} key={habitData._id}>
                          <View style={styles.habitWrapper}>
                            <View style={styles.statusTextWrapper}>
                              <Text style={styles.statusText}>{habitData.habitType}</Text>
                            </View>
                            <View style={styles.habitIcon}>{habitIcon}</View>
                            <Text style={styles.startTimeText}>BiTS</Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                </ScrollView>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mateHabitWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
  },
  mateLivewrapper: {
    paddingTop: 10,
    paddingBottom: 10
  },
  profileImg: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  uriWrapper: {
    marginLeft: 10,
    paddingRight: 10
  },
  profileUriImg: {
    width: 40,
    height: 40,
    borderRadius: 100
  },
  img: {
    marginLeft: 3,
    paddingRight: 7
  },
  name: {
    marginLeft: 4,
    fontWeight: '500'
  },
  habitWrapper: {
    backgroundColor: '#E8C06C',
    margin: 8,
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  statusTextWrapper: {
    width: '100%'
  },
  statusText: {
    textAlign: 'right',
    color: 'white',
    marginRight: 10,
    fontSize: 10
  },
  habitIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  startTimeText: {
    color: 'white',
    fontWeight: '800'
  }
});

export default MateHabit;
