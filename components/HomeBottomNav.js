import React from 'react';
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome
} from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const HomeBottomNav = () => {
  return (
    <View style={styles.bottomNavWrapper}>
      <TouchableOpacity>
        <Entypo name='circle' size={12} color='black' />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='md-play' size={24} color='black' />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name='magnify' size={24} color='black' />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name='user-circle' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#FAF0DB',
    flexGrow: 1
  }
});

export default HomeBottomNav;
