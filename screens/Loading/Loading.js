import React from 'react';
import splashAnimation from '../../assets/animation/splashAnimation.json';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <>
      <LottieView
          source={splashAnimation}
          autoPlay
          loop
          speed={2}
          style={styles.animationWrapper}
        />
    </>
  );
};

const styles = StyleSheet.create({
  animationWrapper: {
    backgroundColor: '#F9BC56'
  }
});

export default Loading;
