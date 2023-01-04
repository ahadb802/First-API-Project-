import card from './card.js';
import detail from './detail.js';
import { createComment, getComment } from './fetchInvolvement.js';
import fetchMealAPI, { fetchSingleMealAPI } from './fetchMealAPI.js';

const itemList = async () => {
  const cardContainer = document.querySelector('.cardContainer');
  const meals = await fetchMealAPI();
  meals.forEach((meal) => {
    cardContainer.appendChild(card(meal));
  });
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      const mealId = event.target.id;
      const meal = await fetchSingleMealAPI(mealId);
      const comments = await getComment(mealId);
      let popup = null;
      if (!comments) {
        popup = detail(meal[0], []);
      } else {
        popup = detail(meal[0], comments);
      }

      document.querySelector('#app').appendChild(popup);

      const commentListContainer = document.querySelector('.comment-list');
      if (!comments.length) {
        commentListContainer.innerText = 'No comment';
      } else {
        comments.forEach((comment) => {
          const commentList = document.createElement('li');
          commentList.innerText = `${comment.creation_date}  ${comment.username}  ${comment.comment}`;
          commentListContainer.appendChild(commentList);
        });
      }

      const addCommentForm = document.querySelector('.comment-form');
      addCommentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = addCommentForm.username.value;
        const comment = addCommentForm.comment.value;
        const data = { username, comment, mealId };
        createComment(data);
      });

      const closeButtons = document.querySelectorAll('.btn-close');
      const popups = document.querySelectorAll('.pop-up');
      closeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          popups.forEach((popup) => {
            popup.style.display = 'none';
          });
        });
      });
    });
  });
};

export default itemList;
