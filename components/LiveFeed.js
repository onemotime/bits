import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { EvilIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchFollowingHabits } from '../redux/habitSlice';
import { ScrollView } from 'react-native-gesture-handler';
import pickIconByType from '../utils/pickIconByType';

const LiveFeed = ({ email, habits }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFollowingHabits(email));
  }, []);

  const handleLikePress = () => {};

  return (
    <View style={styles.liveFeedWrapper}>
      <ScrollView>
        {habits?.length > 0 &&
          habits.map((following, index) => {
            return (
              <View style={styles.mateLivewrapper} key={following._id}>
                <View style={styles.profileImg}>
                  <EvilIcons name="user" size={40} color="black" style={styles.img}/>
                  <Text style={styles.name}>{following.userName}</Text>
                </View>
                <ScrollView horizontal={true}>
                  {following.habits.length > 0 &&
                    following.habits.map(habitData => {
                      const habitIcon = pickIconByType(habitData.type);

                      return (
                        <TouchableOpacity onPress={handleLikePress} key={habitData._id}>
                          <View style={styles.habitWrapper}>
                            <View style={styles.statusTextWrapper}>
                              <Text style={styles.statusText}>지금</Text>
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
  liveFeedWrapper: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1
  },
  mateLivewrapper: {
    paddingTop: 10,
    paddingBottom: 10
  },
  profileImg: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    marginLeft: 10
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

export default LiveFeed;
