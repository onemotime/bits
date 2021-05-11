import React from 'react';
import { useDispatch } from 'react-redux';
import { followUser } from '../redux/userSlice';
import { EvilIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FollowMate = ({ allUsers, following, email }) => {
  const dispatch = useDispatch();

  const handleFollowPress = (userInfo, index) => {
    const followingInfo = {
      followId: userInfo._id,
      email
    };

    dispatch(followUser(followingInfo));
  };

  return (
    <View style={styles.followMateWrapper}>
      <Text style={styles.recommendText}>추천친구</Text>
      <ScrollView>
        {allUsers.length > 0 &&
          allUsers.map((userInfo, index) => {
            const isFollowing = following.some(followUser => {
              return followUser.id === userInfo._id;
            });

            return (
              <View style={styles.mateWrapper} key={index}>
                <View style={styles.profileImg}>
                  <EvilIcons name="user" size={35} color="black" />
                  <View style={styles.userNameWrapper}>
                    <Text style={styles.userName}>{userInfo.userName}</Text>
                  </View>
                </View>
                {isFollowing
                  ? <View style={styles.followIconWrapper}>
                      <FontAwesome name="check" size={24} color='green' />
                    </View>
                  : <TouchableOpacity style={styles.followButton} onPress={() => handleFollowPress(userInfo, index)}>
                      <Entypo name="circle-with-plus" size={24} color='#E8BE64' />
                    </TouchableOpacity>}
              </View>
            );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  followMateWrapper: {
    width: '100%',
    height: 2000,
    backgroundColor: 'white'
  },
  recommendText: {
    marginTop: 20,
    marginLeft: 24,
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 12,
    color: '#E4B356'
  },
  mateWrapper: {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileImg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  userNameWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  userName: {
    color: 'gray',
    fontWeight: '800',
    fontSize: 12
  },
  followIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30
  },
  followButton: {
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FollowMate;
