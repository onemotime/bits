import React from 'react';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FollowMate = ({ allUsers }) => {
  const mockMateData = ['susan', 'Choy', 'seul.gi'];
  const handleFollowPress = () => {};

  return (
    <View style={styles.followMateWrapper}>
      <Text style={styles.recommendText}>추천친구</Text>
      {allUsers.length > 0 &&
        allUsers.map((userInfo, index) => {
          return (
            <View style={styles.mateWrapper} key={index}>
              <View style={styles.profileImg}>
                <EvilIcons name="user" size={32} color="black" />
                <Text>{userInfo.userName}</Text>
              </View>
              <TouchableOpacity style={styles.followButton} onPress={handleFollowPress}>
                <Entypo name="circle-with-plus" size={24} color='#E8BE64' />
              </TouchableOpacity>
            </View>
          );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  followMateWrapper: {
    width: '100%',
    height: '75%',
    backgroundColor: 'white'
  },
  recommendText: {
    padding: 10,
    fontWeight: '600',
    fontSize: 12,
    color: '#E4B356'
  },
  mateWrapper: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileImg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  followButton: {
    marginRight: 30,
    justifyContent: 'center'
  }
});

export default FollowMate;
