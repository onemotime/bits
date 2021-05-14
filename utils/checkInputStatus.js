import pickModalMessage from '../utils/pickModalMessage';
import validateEmail from '../utils/validateEmail';

const checkInputStatus = (
  checkType,
  email,
  password,
  userName,
  confirmPassword,
  setModalMessage,
  setModal
) => {
  const isEmail = validateEmail(email);

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
