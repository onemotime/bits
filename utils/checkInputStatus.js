import pickModalMessage from '../utils/pickModalMessage';
import validateEmail from '../utils/validateEmail';

/**
 * Check if users login && signup input is valid
 * @param {String} checkType - login or signup ex) 'login', 'signup'
 * @param {String} email - User input email
 * @param {String} password - User input password
 * @param {String} userName - User input name
 * @param {String} confirmPassword - User confirmPassword
 * @param {Function} setModalMessage - Function to change modal message stats
 * @param {Function} setModal - Function to change modal view status
 * @param {Boolean} isError - Result after api request if it's error or not
 * @returns {Boolean} - Boolean result if input is validate or not
 */

const checkInputStatus = (
  checkType,
  email,
  password,
  userName,
  confirmPassword,
  setModalMessage,
  setModal,
  isError
) => {
  const isEmail = validateEmail(email);
  if (isError) {
    const message = pickModalMessage('loginFail');

    setModalMessage(message);
    setModal(true);

    return true;
  }

  if (email.length === 0 || password.length === 0) {
    const message = pickModalMessage('none');

    setModalMessage(message);
    setModal(true);

    return true;
  }

  if (!isEmail) {
    const message = pickModalMessage('invalidEmail');

    setModalMessage(message);
    setModal(true);

    return true;
  }

  if (checkType === 'signup') {
    if (userName === '' || confirmPassword.length === 0) {
      const message = pickModalMessage('none');

      setModalMessage(message);
      setModal(true);

      return true;
    }

    if (password !== confirmPassword) {
      const message = pickModalMessage('passwordMismatch')

      setModalMessage(message);
      setModal(true);

      return true;
    }
  }

  return false;
};

export default checkInputStatus;
