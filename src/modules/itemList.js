import card from './card.js';
import commentCounter from './commentCounter.js';
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
        popup = detail(meal[0]);
      } else {
        popup = detail(meal[0]);
      }

      document.querySelector('#app').appendChild(popup);

      const commentListContainer = document.querySelector('.comment-list');
      if (!comments.length) {
        commentListContainer.innerHTML = '<span class="no-comment"> No comment </span>';
      } else {
        comments.forEach((comment) => {
          const commentList = document.createElement('li');
          commentList.innerHTML = `
            <span class="comment-date"> ${comment.creation_date} </span>
            <span class="comment-username"> ${comment.username} </span>  
            <span class="comment-comment">${comment.comment}</span>`;
          commentListContainer.appendChild(commentList);
        });
      }
      commentCounter();

      const addCommentForms = document.querySelectorAll('.comment-form');
      addCommentForms.forEach((form) => {
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          const username = form.username.value;
          const comment = form.comment.value;
          const data = { username, comment, mealId };
          createComment(data).then((res) => {
            const commentList = document.createElement('li');
            commentList.innerHTML = `
              <span class="comment-date"> ${res.creation_date} </span>
              <span class="comment-username"> ${res.username} </span>  
              <span class="comment-comment">${res.comment}</span>
              `;
            commentListContainer.appendChild(commentList);
            commentCounter();
            commentListContainer.querySelector('.no-comment').style.display = 'none';
          });
          form.username.value = '';
          form.comment.value = '';
        });
      });

      const closeButtons = document.querySelectorAll('.btn-close');
      const popups = document.querySelectorAll('.pop-up');
      closeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          popups.forEach((popup) => {
            document.querySelector('#app').removeChild(popup);
          });
        });
      });
    });
  });
};

export default itemList;
