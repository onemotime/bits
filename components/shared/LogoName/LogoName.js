import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

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

export default LogoName;
