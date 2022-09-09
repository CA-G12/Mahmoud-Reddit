// Get user name
const userName = document.querySelector('#user_name');

fetch('/users/user-name')
  .then((data) => data.json())
  .then((data) => {
    localStorage.setItem('user', JSON.stringify(data));
    userName.textContent = data.username;
  });

// Get ALL posts Request
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
  localStorage.removeItem('user');
});

// Add post Request
const createPostBtn = document.querySelector('.create__post');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');
const postSubmitButton = document.querySelector('#post_submit_button');
const postContent = document.querySelector('#post_content');
const imgLink = document.querySelector('#img_link');
const toggleModal = () => {
  modal.classList.toggle('show-modal');
};

closeButton.addEventListener('click', toggleModal);

const modalMsg = () => {
  modal.classList.toggle('show-modal');
};

createPostBtn.addEventListener('click', () => {
  modalMsg();
});

postSubmitButton.addEventListener('click', () => {
  const timeStamp = new Date().getTime();
  const postData = {
    content: postContent.value,
    image: imgLink.value,
    timestapm: timeStamp,
  };

  fetch('/users/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  }).then((data) => data.json())
    .then((data) => {
      console.log(data);
      window.location.reload();
    })
    .catch((err) => console.log({ error: err }));

  toggleModal();
});
