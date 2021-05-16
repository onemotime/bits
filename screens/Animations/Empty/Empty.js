import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

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

export default Like;
