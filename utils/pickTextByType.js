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
  }
};

export default pickTextByType;
