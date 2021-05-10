import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import LiveFeed from '../components/LiveFeed';
import MateRegister from '../components/MateRegister';

const LiveFeedScreen = () => {
  const { email, following } = useSelector(state => state.user);

  return (
    <View style={styles.wrapper}>
      {following.length > 0
        ? <LiveFeed />
        : <MateRegister email={email} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#E8BE64',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#E8BE64'
  }
});

export default LiveFeedScreen;
