import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MateRegister from '../components/MateRegister';

const LiveFeedScreen = ({ navigation }) => {

  return (
    <View style={styles.wrapper}>
      <MateRegister />
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
