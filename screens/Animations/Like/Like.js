import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Like = ({ onFinish }) => {

  return (
    <>
      <LottieView
        source={require('../../../assets/animation/likeAnimation.json')}
        autoPlay={true}
        speed={1}
        loop={false}
        resizeMode='cover'
        style={styles.animationWrapper}
        onAnimationFinish={onFinish}
      />
    </>
  );
};

const styles = StyleSheet.create({
  animationWrapper: {
    zIndex: 1
  }
});

export default Like;
