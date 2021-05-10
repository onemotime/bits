import React from 'react';
import {
  AntDesign,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const pickImgByType = (
  habitType,
  isHabitSelected,
  targetHabitType
) => {
  switch (habitType) {
    case 'code':
      return (
        <AntDesign
          name='codesquare'
          size={40}
          color={(isHabitSelected && (targetHabitType === 'code')) ? '#4cd137' : 'white'} />
      );
      case 'read':
        return (
          <Entypo
            name='open-book'
            size={40}
            color={(isHabitSelected && (targetHabitType === 'read')) ? '#4cd137' : 'white'}
          />
        );
    case 'swim':
      return (
        <FontAwesome5
          name='swimmer'
          size={40}
          color={(isHabitSelected && (targetHabitType === 'swim')) ? '#4cd137' : 'white'}
        />
      );
    case 'meditate':
      return (
        <MaterialCommunityIcons
          name='meditation'
          size={40}
          color={(isHabitSelected && (targetHabitType === 'meditate')) ? '#4cd137' : 'white'}
        />
      );
    case 'run':
      return (
        <MaterialCommunityIcons
          name='run-fast'
          size={40}
          color={(isHabitSelected && (targetHabitType === 'run')) ? '#4cd137' : 'white'}
        />
      );
  }
};

export default pickImgByType;
