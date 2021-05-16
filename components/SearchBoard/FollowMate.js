import React from 'react';
import { useDispatch } from 'react-redux';
import { followUser } from '../../redux/userSlice';
import { EvilIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import styles from './styles';

const FollowMate = ({ allUsers, following, accessToken, userName }) => {
  const dispatch = useDispatch();

  const handleFollowPress = (userInfo) => {
    const followingInfo = {
      followId: userInfo._id,
      accessToken
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
                        name='user'
                        size={60}
                        color='black'
                      />}
                  <View style={styles.userNameWrapper}>
                    <Text style={styles.userName}>{userInfo.userName}</Text>
                  </View>
                </View>
                {isFollowing
                  ? <View style={styles.followIconWrapper}>
                      <FontAwesome
                        name='check'
                        size={24}
                        color='green'
                      />
                    </View>
                  : <TouchableOpacity
                      style={styles.followButton}
                      onPress={() => handleFollowPress(userInfo, index)}
                    >
                      <Entypo
                        name='circle-with-plus'
                        size={24}
                        color='#E8BE64'
                      />
                    </TouchableOpacity>}
              </View>
            );
        })}
      </ScrollView>
    </View>
  );
};

export default FollowMate;
