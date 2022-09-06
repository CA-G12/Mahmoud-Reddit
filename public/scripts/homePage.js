fetch('/posts')
  .then((data) => data.json())
  .then((data) => {
    data.forEach((element) => {
      // eslint-disable-next-line no-undef
      generateCards(element);
    });
  })
  .catch((err) => console.log({ err }));

// logout Request
const logoutBtn = document.querySelector('#logout__btn');

logoutBtn.addEventListener('click', () => {
  fetch('/logout')
    .then(window.location.href = '/');
  cache((err) => console.log(err));
});
