const validateEmail = (email) => {
  const regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (regExp.test(email) === false) {
    return false;
  }

  return true;
};

export default validateEmail;
