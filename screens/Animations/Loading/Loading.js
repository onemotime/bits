import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <>
      <LottieView
        source={require('../../../assets/animation/loadingAnimation.json')}
        autoPlay
        loop
        speed={2}
        style={{ backgroundColor: '#F9BC56' }}
      />
    </>
  );
};

export default Loading;
