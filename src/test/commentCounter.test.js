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
