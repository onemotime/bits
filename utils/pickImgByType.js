import React from 'react';
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const pickImgByType = (habitType) => {
  switch (habitType) {
    case 'swim':
      return (
        <FontAwesome5 name="swimmer" size={40} color="white" />
      );
    case 'read':
      return (
        <Entypo name="open-book" size={40} color="white" />
      );
    case 'weight':
      return (
        <MaterialCommunityIcons name="weight-lifter" size={40} color="white" />
      );
  }
};

export default pickImgByType;
