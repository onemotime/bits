import React from 'react';
import {
  FontAwesome,
  FontAwesome5
} from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const HomeTopNav = () => {
  return (
    <View style={styles.topNavWrapper}>
      <View style={styles.iconNameWrapper}>
        <View style={styles.icon}>
          <FontAwesome5 name='user-circle' size={24} color='white' />
        </View>
        <View style={styles.name}>
          <Text style={styles.text}>onemo</Text>
        </View>
      </View>
      <View style={styles.gearWrapper}>
        <FontAwesome name='gear' size={24} color='white' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topNavWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderColor: 'black',
    marginLeft: 35,
    flexGrow: 1,
    marginTop: 20
  },
  iconNameWrapper: {
    flexDirection: 'row'
  },
  icon: {
    marginRight: 10
  },
  name: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
  gearWrapper: {
    marginRight: 10
  }
});

export default HomeTopNav;
