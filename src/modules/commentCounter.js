const commentCounter = () => {
  const commentContainer = document.querySelector('.comments');
  const commentCounter = commentContainer.querySelector('.comment-count');
  const comments = document.querySelectorAll('.comment-list li');
  if (comments) {
    commentCounter.innerText = comments.length;
    return comments.length;
  }
  commentCounter.innerText = 0;
  return 0;
};

export default commentCounter;