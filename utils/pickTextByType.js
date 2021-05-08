const pickTextByType = (habitType) => {
  switch (habitType) {
    case 'swim':
      return '수영';
    case 'read':
      return '독서';
    case 'weight':
      return '웨이트'
  }
};

export default pickTextByType;
