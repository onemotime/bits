import React from 'react';

import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome
} from '@expo/vector-icons';

/**
 * Generate bottom tap icon
 * @param {String} name - Type of bottom tap
 * @param {String} color - Default tap color in hex code
 * @param {Number} size  - Default tap size
 * @returns {Component} - Bottom tap icon
 */

export const pickTabIconByName = (name, color, size) => {
  switch (name) {
    case '습관': {
      return <Entypo
              name='circle'
              size={18}
              color={color}
            />
    }
    case '라이브': {
      return <Ionicons
                name='md-play'
                size={size}
                color={color}
              />
    }
    case '검색': {
      return <MaterialCommunityIcons
                name='magnify'
                size={size}
                color={color}
              />
    }
    case '내정보': {
      return <FontAwesome
                name='user-circle'
                size={size}
                color={color}
              />
    }
  }
};
