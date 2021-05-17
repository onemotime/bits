/**
 * Generate request headers with accessToken
 * @param {String} accessToken - accessToken made from server by JWT
 * @returns {Object} - request headers
 */

const generateHeaderOption = (accessToken) => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `${accessToken}`
  };
};

export default generateHeaderOption;
