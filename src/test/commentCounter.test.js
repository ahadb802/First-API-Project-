/*
 * @jest-environment jsdom
 */

test('Testing comment counter', () => {
  document.body.innerHTML = '<div id="app"></div>';
  const commentContainer = document.createElement('div');
  commentContainer.classList.add('comments');
  document.querySelector('#app').appendChild(commentContainer);
  const commentListElement = document.createElement('ul');
  commentListElement.classList.add('comment-list');
  commentContainer.appendChild(commentListElement);

  const comments = [
    {
      comment: 'Testing comment',
      creation_date: '2023-01-04',
      username: 'Birhanu',
    },
    {
      username: 'new comment',
      creation_date: '2023-01-04',
      comment: 'It is working',
    },
    {
      username: 'test',
      creation_date: '2023-01-04',
      comment: 'theird\n',
    },
    {
      username: 'hello',
      comment: 'what',
      creation_date: '2023-01-05',
    },
    {
      comment: 'what up',
      creation_date: '2023-01-05',
      username: 'new thing',
    },
    {
      comment: 'Can it add',
      username: 'what',
      creation_date: '2023-01-05',
    },
  ];

  comments.forEach((comment) => {
    const listElement = document.createElement('li');
    listElement.innerText = `${comment.creation_date}  ${comment.username}  ${comment.comment}`;
    commentListElement.appendChild(listElement);
  });
  // Testing
  const commentListInDom = document.querySelectorAll('.comment-list li');
  expect(commentListInDom.length).toEqual(comments.length);
});

test('Testing Homepage Counter', () => {
  document.body.innerHTML = '<div id="app"></div>';
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('cardContainer');
  document.querySelector('#app').appendChild(cardContainer);
  const meal = [
    {
      strMeal: 'coco',
      strMealThumb: './assests/logo.png',
      mealLikes: 1,
      idMeal: 23,
    },
    {
      strMeal: 'coco',
      strMealThumb: './assests/logo.png',
      mealLikes: 1,
      idMeal: 3,
    },
    {
      strMeal: 'coco',
      strMealThumb: './assests/logo.png',
      mealLikes: 1,
      idMeal: 13,
    },
  ];
  meal.forEach((item) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
    <img src=${item.strMealThumb} alt="food-one" />
    <div class="card__body">
      <div class="card__body__top">
        <span>${item.strMeal}</span>
        <span class="like-icon">
          <i class="fa-regular fa-heart fa-2x"></i>
          <span class="likes">${item.mealLikes} Likes</span>
        </span>
      </div>
      <div class="card__body__buttons">
        <button class="btn comment-btn" id="${item.idMeal}">Comments</button>
      </div>
    </div>
  `;
    cardContainer.appendChild(cardElement);
  });
  const totalCards = document.querySelectorAll('.card');
  expect(totalCards.length).toEqual(meal.length);
});