const pickColorByCount = (completeCount) => {
  switch (completeCount) {
    case 0:
      return '#fff200';
    case 1:
      return '#4cd137';
    case 2:
      return '#00a8ff';
    case 3:
      return '#7f8fa6';
  }
};

export default pickColorByCount;
