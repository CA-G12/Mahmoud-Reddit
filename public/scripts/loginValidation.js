const btn = document.querySelector('#login_submit_button');
const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#error_message');

const validation = () => {
  const emailText = emailInput.value;
  const passwordText = passwordInput.value;

  if (!emailText) {
    return 'please fill all the required fields';
  }

  // eslint-disable-next-line prefer-regex-literals
  const emailRegex = new RegExp(
    /^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$/gm,
  );

  const isValidEmail = emailRegex.test(emailText);
  if (!isValidEmail) {
    return 'please add correct email!';
  }

  if (passwordText.length < 8) {
    return 'please add valid password!';
  }

  return true;
};

btn.addEventListener('click', () => {
  const validate = validation();
  if (validate === true) {
    errorMessage.textContent = '';

    const userData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    // logIn Request

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log({ data });
        const { msg } = data;
        if (msg === 'Auth failed. User not found.') {
          errorMessage.textContent = msg;
        } else if (msg === 'Auth failed. Check email and password') {
          errorMessage.textContent = msg;
        } else {
          console.log(data);
          errorMessage.textContent = '';
          window.location.href = '/homepage';
        }
      })
      .catch((err) => {
        console.log({ error: err });
      });
  } else {
    errorMessage.textContent = validate;
  }
});
