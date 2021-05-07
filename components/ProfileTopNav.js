import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileTopNav = () => {
  const [isFollowing, setFollow] = useState(false);
  const [isSubscribing, setSubscribe] = useState(false);

  const handleFollowPress = () => {
    setFollow(!isFollowing);
  };

  const handleSubscribePress = () => {
    setSubscribe(!isSubscribing);
  };

  return (
    <View style={styles.topNavWrapper}>
      <View style={styles.followStatusWrapper}>
        <Text style={styles.name}>susan</Text>
        {isFollowing
          ? <TouchableOpacity onPress={handleFollowPress}>
              <View style={styles.followTextWrapper}>
                <Text style={styles.followText}>Mate</Text>
              </View>
            </TouchableOpacity>
          : <TouchableOpacity onPress={handleFollowPress}>
              <View style={styles.followTextWrapper}>
                <Text style={styles.followText}>Follow +</Text>
              </View>
            </TouchableOpacity>}
      </View>
      {isFollowing &&
        <TouchableOpacity style={styles.subscribeWrapper} onPress={handleSubscribePress}>
          {isSubscribing
            ? <MaterialCommunityIcons name='bell-remove-outline' size={24} color='white' />
            : <MaterialCommunityIcons name='bell-plus-outline' size={24} color='white' />}
        </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  topNavWrapper: {
    backgroundColor: '#E0C066',
    width: '100%',
    height: 40,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  followStatusWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 20,
    width: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  name: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15
  },
  followTextWrapper: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10
  },
  followText: {
    color: '#E0A935',
    fontWeight: '700'
  },
  subscribeWrapper: {
    marginTop: 30,
    marginRight: 20,
    justifyContent: 'center'
  }
});

export default ProfileTopNav;
