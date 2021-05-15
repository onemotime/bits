import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateHabitLikes } from '../../redux/habitSlice';
import { EvilIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import pickIconByType from '../../utils/pickIconByType';
import Like from '../../screens/Animations/Like/Like';

const MateHabit = ({ followingUserHabits, accessToken }) => {
  const [likeHabitId, setHabitId] = useState('');
  const dispatch = useDispatch();

  const handleLikePress = (userId, habitId) => {
    const updateHabitInput = {
      userId,
      habitId,
      accessToken
    };

    dispatch(updateHabitLikes(updateHabitInput));

    setHabitId(habitId);
  };

  const handleAnimationFinish = () => {
    setHabitId('');
  };

  return (
    <View style={styles.mateHabitWrapper}>
      <ScrollView>
        {followingUserHabits?.length > 0 &&
          followingUserHabits.map((followingUser) => {
            const userId = followingUser.userId;

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
                        name='user' size={50}
                        color='black'
                        style={styles.img}
                      />}
                  <Text style={styles.name}>{followingUser.userName}</Text>
                </View>
                <ScrollView horizontal={true}>
                  {followingUser.habits.length > 0 &&
                    followingUser.habits.map((habitData) => {
                      const habitIcon = pickIconByType(habitData.habitType);

                      return (
                        <TouchableOpacity
                          onPress={() => handleLikePress(userId, habitData._id)}
                          key={habitData._id}
                        >
                          <View style={styles.habitWrapper}>
                            <View style={styles.statusTextWrapper}>
                              <Text style={styles.statusText}>{habitData.habitType}</Text>
                            </View>
                            {(likeHabitId === habitData._id) &&
                              <Like
                                onFinish={handleAnimationFinish}
                              />}
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
