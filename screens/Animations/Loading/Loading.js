import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <>
      <LottieView
        source={require('../../../assets/animation/loadingAnimation.json')}
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
