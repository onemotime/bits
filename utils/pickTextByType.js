/**
 * habitType to KR text
 * @param {String} habitType - HabitType in EN
 * @returns {String} - HabitType in KR text
 */

const pickTextByType = (habitType) => {
  switch (habitType) {
    case 'code':
      return '코딩'
    case 'read':
        return '독서';
    case 'swim':
      return '수영';
    case 'meditate':
      return '명상';
    case 'run':
      return '달리기';
    case 'bicycle':
      return '자전거';
    case 'yoga':
      return '요가';
  }
};

export default pickTextByType;
