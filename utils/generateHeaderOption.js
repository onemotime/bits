const generateHeaderOption = (accessToken) => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `${accessToken}`
  };
};

export default generateHeaderOption;
