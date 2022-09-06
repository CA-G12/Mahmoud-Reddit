/* eslint-disable no-undef */
const signupBtn = document.querySelector('.signup__btn');
const loginBtn = document.querySelector('.login__btn');

signupBtn.addEventListener('click', () => {
  fetch('/signup')
    .then(window.location.href = '/signup')
    .catch((err) => console.log(err));
});

loginBtn.addEventListener('click', () => {
  fetch('/login')
    .then(window.location.href = '/login')
    .catch((err) => console.log(err));
});

fetch('/posts')
  .then((data) => data.json())
  .then((data) => {
    data.forEach((element) => {
      generateCards(element);
    });
  })
  .catch((err) => console.log({ err }));
