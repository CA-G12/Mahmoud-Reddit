/* eslint-disable no-unused-vars */
const container = document.querySelector('.container');

const createElement = (tag) => document.createElement(tag);

const generateCards = (data) => {
  const card = createElement('div');
  card.setAttribute('class', 'card');
  if (data.image) {
    const img = createElement('img');
    img.setAttribute('src', data.image);
    card.appendChild(img);
  }

  const cardContent = createElement('div');
  cardContent.setAttribute('class', 'card__content');

  const firstPara = createElement('p');
  firstPara.textContent = data.content;
  cardContent.appendChild(firstPara);

  const secondPara = createElement('p');
  secondPara.setAttribute(
    'class',
    'card__created_by',
  );
  secondPara.textContent = '6 hours ago by ';

  const secondParaSpan = createElement('span');
  secondParaSpan.setAttribute('class', 'card__created_by__name');
  secondParaSpan.textContent = 'mahmoud';
  secondPara.appendChild(secondParaSpan);
  cardContent.appendChild(secondPara);

  const thirdPara = createElement('p');
  thirdPara.setAttribute('class', 'card__created_by card__tag');
  thirdPara.textContent = '/r/';

  const thirdParaSpan = createElement('span');
  thirdParaSpan.setAttribute('class', 'card__created_by__name');
  thirdParaSpan.textContent = ' worldnews';
  thirdPara.appendChild(thirdParaSpan);
  cardContent.appendChild(thirdPara);

  // card operation footer section
  const cardOperation = createElement('div');
  cardOperation.setAttribute('class', 'card__operation');

  // card operation likes section
  const cardOperationLikes = createElement('div');
  cardOperationLikes.setAttribute('class', 'card__operation__likes');

  const arrowUpBtn = createElement('button');
  arrowUpBtn.setAttribute('type', 'button');
  arrowUpBtn.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
  cardOperationLikes.appendChild(arrowUpBtn);

  const likesNum = createElement('p');
  likesNum.setAttribute('class', 'card__operation__number');
  likesNum.textContent = '23k';
  cardOperationLikes.appendChild(likesNum);

  const arrowDownBtn = createElement('button');
  arrowDownBtn.setAttribute('type', 'button');
  arrowDownBtn.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
  cardOperationLikes.appendChild(arrowDownBtn);

  cardOperation.appendChild(cardOperationLikes);

  // card operation comments section

  const cardOperationComments = createElement('div');
  cardOperationComments.setAttribute('class', 'card__operation__comments');

  const commentIcon = createElement('i');
  commentIcon.setAttribute('class', 'fa-solid fa-message');
  cardOperationComments.appendChild(commentIcon);

  const commentPara = createElement('p');
  commentPara.setAttribute('class', 'card__operation__number');
  commentPara.textContent = '25k';
  cardOperationComments.appendChild(commentPara);
  cardOperation.appendChild(cardOperationComments);

  // card operation share section
  const cardOperationShare = createElement('div');
  cardOperationShare.setAttribute('class', 'card__operation__share');
  cardOperationShare.innerHTML = '<i class="fa-solid fa-share-nodes"></i>';

  cardOperation.appendChild(cardOperationShare);

  cardContent.appendChild(cardOperation);
  card.appendChild(cardContent);
  container.appendChild(card);
};
