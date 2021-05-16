import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LogoName = () => {
  return (
    <View style={styles.logoWrapper}>
      <FontAwesome
        name='heartbeat'
        size={24}
        color='white'
      />
      <Text style={styles.logoText}>BiTS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row'
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 10
  }
});

export default LogoName;
