import React from 'react';
import {
  AntDesign,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const pickImgByType = (habitType, isHabitSelected, targetHabitType) => {
  switch (habitType) {
    case 'code':
      return (
        <AntDesign
          name='codesquare'
          size={40}
          color={(isHabitSelected && (targetHabitType === 'code')) ? 'green' : 'white'} />
      );
      case 'read':
        return (
          <Entypo
            name='open-book'
            size={40}
            color={(isHabitSelected && (targetHabitType === 'read')) ? 'green' : 'white'}
          />
        );
    case 'swim':
      return (
        <FontAwesome5
          name='swimmer'
          size={40}
          color={(isHabitSelected && (targetHabitType === 'swim')) ? 'green' : 'white'}
        />
      );
    case 'meditate':
      return (
        <MaterialCommunityIcons
          name='meditation'
          size={40}
          color={(isHabitSelected && (targetHabitType === 'meditate')) ? 'green' : 'white'}
        />
      );
    case 'run':
      return (
        <MaterialCommunityIcons
          name='run-fast'
          size={40}
          color={(isHabitSelected && (targetHabitType === 'run')) ? 'green' : 'white'}
        />
      );
  }
};

export default pickImgByType;
