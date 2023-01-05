import card from './card.js';
import commentCounter from './commentCounter.js';
import detail from './detail.js';
import {
  createComment, getComment, getLikes, createLike,
} from './fetchInvolvement.js';
import fetchMealAPI, { fetchSingleMealAPI } from './fetchMealAPI.js';

const filterLike = (likes, mealId) => {
  const filtered = likes.filter((like) => like.item_id === Number(mealId));
  if (filtered.length) {
    return filtered[0].likes;
  }
  return 0;
};
const itemList = async () => {
  const cardContainer = document.querySelector('.cardContainer');
  const meals = await fetchMealAPI();
  const likes = await getLikes();
  meals.forEach((meal) => {
    const mealLikes = filterLike(likes, meal.idMeal);
    cardContainer.appendChild(card({ ...meal, mealLikes }));
  });
  const likeBtns = document.querySelectorAll('.like-icon i');
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      let { id } = event.target;
      id = Number(id.split('-')[1]);
      createLike(id);
      const numberOfLikes = btn.nextSibling.nextSibling;
      numberOfLikes.innerHTML = Number(numberOfLikes.innerHTML) + 1;
    });
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
          commentList.innerText = `${comment.creation_date}  ${comment.username}  ${comment.comment}`;
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
            commentList.innerText = `${res.creation_date}  ${res.username}  ${res.comment}`;
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
