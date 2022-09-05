// eslint-disable-next-line no-undef
const btn = document.querySelector('#login_submit_button');
// eslint-disable-next-line no-undef
const passwordInput = document.querySelector('#password');
// eslint-disable-next-line no-undef
const emailInput = document.querySelector('#email');
// eslint-disable-next-line no-undef
const errorMessage = document.querySelector('#error_message');

const validation = () => {
  const passwordText = passwordInput.value;
  const emailText = emailInput.value;

  if (!passwordText || !emailText) {
    return 'please fill all the required fields';
  }

  const emailRegex = new RegExp(
    /^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$/gm
  );
  const isValidEmail = emailRegex.test(emailText);
  if (!isValidEmail) {
    return 'please add correct email!';
  }

  if (passwordText.length < 8) {
    return 'please add strong password!';
  }

  return true;
};

btn.addEventListener('click', () => {
  const validate = validation();
  if (validate === true) {
    errorMessage.textContent = '';
  } else {
    errorMessage.textContent = validate;
  }
});
