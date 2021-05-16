import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const StartCountDownBtn = ({ onStartPress }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onStartPress}>
        <View style={styles.outterCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.pressText}>PRESS HABIT</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '44%'
  },
  outterCircle: {
    borderWidth: 13,
    width: 170,
    height: 170,
    borderRadius: 100,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircle: {
    width: 140,
    height: 140,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4DFB0'
  },
  pressText: {
    fontSize: 15,
    fontWeight: '600'
  }
});

export default StartCountDownBtn;
