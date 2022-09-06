const signupSubmitButton = document.querySelector('#signup_submit_button');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email');
const aboutInput = document.querySelector('#about');
const errorMessage = document.querySelector('#error_message');

const validation = () => {
  const usernameText = usernameInput.value;
  const passwordText = passwordInput.value;
  const aboutText = aboutInput.value;
  const emailText = emailInput.value;

  if (!usernameText || !passwordText || !aboutText || !emailText) {
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
    return 'please add strong password!';
  }

  return true;
};

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');
const headingMsg = document.querySelector('.modal-content h1');

const toggleModal = () => {
  modal.classList.toggle('show-modal');
};

closeButton.addEventListener('click', toggleModal);

const modalMsg = (msg) => {
  console.log('clicked');
  modal.classList.toggle('show-modal');
  headingMsg.innerHTML = `${msg} <a href='../pages/login.html'>Log In</a>`;
};

signupSubmitButton.addEventListener('click', () => {
  const validate = validation();

  const username = document.querySelector('#username');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const about = document.querySelector('#about');
  const imgLink = document.querySelector('#img_link');

  if (validate === true) {
    errorMessage.textContent = '';

    const userData = {
      username: username.value,
      email: email.value,
      password: password.value,
      about: about.value,
      imgLink: imgLink.value,
    };

    // signup Request
    fetch(
      '/signup',
      {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        modalMsg(data.msg);
      })
      .catch((err) => console.log({ error: err }));
  } else {
    errorMessage.textContent = validate;
  }
});
