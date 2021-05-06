import React from 'react';
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Entypo
} from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topNavWrapper}>
        <View style={styles.iconNameWrapper}>
          <View style={styles.icon}>
            <FontAwesome5 name='user-circle' size={24} color='white' />
          </View>
          <View style={styles.name}>
            <Text>onemo</Text>
          </View>
        </View>
        <View style={styles.gearWrapper}>
          <FontAwesome name='gear' size={24} color='white' />
        </View>
      </View>
      <View style={styles.habitAddWrapper}>
        <View style={styles.textButtonWrapper}>
          <View stlye={styles.registerTextWrapper}>
            <Text style={styles.registerText}>습관을 등록해주세요</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Entypo name="circle-with-plus" size={24} color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.pressButtonWrapper}>
        <Text style={styles.pressButtonText}>
          Press Your Habit
        </Text>
        <View style={styles.circleWrapper}>
        </View>
      </View>
      <View style={styles.bottomNavWrapper}>
        <Entypo name='circle' size={12} color='black' />
        <Ionicons name='md-play' size={24} color='black' />
        <MaterialCommunityIcons name='magnify' size={24} color='black' />
        <FontAwesome name='user-circle' size={24} color='black' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#E8BE64'
  },
  topNavWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: '10%',
    borderColor: 'black',
    borderWidth: 1
  },
  iconNameWrapper: {
    flexDirection: 'row'
  },
  name: {
    alignItems: 'center'
  },
  gearWrapper: {
    marginRight: 10
  },
  habitAddWrapper: {
    backgroundColor: '#E9C375',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '25%',
    borderRadius: 10,
  },
  textButtonWrapper: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  registerText: {
    fontWeight: '900',
    color: 'white',
    fontSize: 15
  },
  pressButtonWrapper: {
    borderWidth: 1,
    width: '80%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  circleWrapper: {
    borderWidth: 1,
    width: '80%',
    height: '80%'
  },
  bottomNavWrapper: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#FAF0DB'
  }
});

export default HomeScreen;
