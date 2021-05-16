import React from 'react';
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
        style={{ zIndex: 1 }}
        onAnimationFinish={onFinish}
      />
    </>
  );
};

export default Like;
