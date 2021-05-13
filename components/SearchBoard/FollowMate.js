import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { followUser, fetchUser } from '../../redux/userSlice';
import { EvilIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const FollowMate = ({ allUsers, following, email, userName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(email));
  }, []);

  const handleFollowPress = (userInfo) => {
    const followingInfo = {
      followId: userInfo._id,
      email
    };

    dispatch(followUser(followingInfo));
  };

  return (
    <View style={styles.followMateWrapper}>
      <Text style={styles.recommendText}>추천친구</Text>
      <ScrollView style={styles.scroll}>
        {allUsers.length > 0 &&
          allUsers.map((userInfo, index) => {
            const isFollowing = following.some(followUser => {
              return followUser.id === userInfo._id;
            });

            if (userInfo.userName === userName) return;
            return (
              <View style={styles.mateWrapper} key={index}>
                <View style={styles.profileImg}>
                  {userInfo.imageUri
                    ? <View style={styles.userProfileWrapper}>
                        <Image
                          source={{ uri: userInfo.imageUri }}
                          style={styles.userProfileImg}
                        />
                      </View>
                    : <EvilIcons
                        name="user"
                        size={60}
                        color="black"
                      />}
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
    backgroundColor: 'white',
    flex: 1
  },
  recommendText: {
    marginTop: 20,
    marginLeft: 24,
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 12,
    color: '#E4B356'
  },
  scroll: {
  },
  mateWrapper: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileImg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  userProfileWrapper: {
    paddingLeft: 5,
    paddingRight: 5
  },
  userProfileImg: {
    width: 50,
    height: 50,
    borderRadius: 100
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
