const passwordValidator = (password) => {
  const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
  return passwordRule.test(password);
};

export default passwordValidator;
