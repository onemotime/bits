/**
 * Generate modal message by user's lack input status
 * @param {String} messageType - modal message type
 * @returns {String} - modal message
 */

const pickModalMessage = (messageType) => {
  switch (messageType) {
    case 'none':
      return '모든 정보를 입력해주세요';
    case 'invalidEmail':
      return '올바른 이메일 형식이 아닙니다';
    case 'passwordMismatch':
      return '비밀번호가 일치하지 않습니다';
  }
};

export default pickModalMessage;
