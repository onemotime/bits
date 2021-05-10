const convertTimeStrToSec = (timeStr) => {
  const timeStrArr = timeStr.split(' ');
  const time = Number(timeStrArr[0]);
  const measure = timeStrArr[1];

  switch (measure) {
    case 's':
      return time;
    case 'm':
      return time * 60;
    case 'h':
      return time * 3600;
  }
};

export default convertTimeStrToSec;
