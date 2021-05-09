import React from 'react';
import {
  AntDesign,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const pickImgByType = (habitType) => {
  switch (habitType) {
    case 'code':
      return (
        <AntDesign name="codesquare" size={40} color="black" />
      );
      case 'read':
        return (
          <Entypo name="open-book" size={40} color="white" />
        );
    case 'swim':
      return (
        <FontAwesome5 name="swimmer" size={40} color="white" />
      );
    case 'meditate':
      return (
        <MaterialCommunityIcons name="meditation" size={24} color="white" />
      );
    case 'run':
      return (
        <MaterialCommunityIcons name="run-fast" size={24} color="black" />
      );
  }
};

export default pickImgByType;
