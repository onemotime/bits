import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Like = () => {

  return (
    <View style={styles.animationWrapper}>
      <LottieView
        source={require('../../../assets/animation/emptyAnimation.json')}
        autoPlay={true}
        resizeMode='cover'
        speed={1}
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animationWrapper: {
    borderColor: 'red',
    height: 200,
    width: 300
  }
});

export default Like;
