import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import FollowMate from '../components/FollowMate';

const LiveRegisterScreen = () => {
  const { allUsers } = useSelector(state => state.user);

  return (
    <View style={styles.wrapper}>
      <FollowMate allUsers={allUsers} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#E8BE64'
  }
});

export default LiveRegisterScreen;
