import card from './card.js';
import detail from './detail.js';
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
      const meal = await fetchSingleMealAPI(event.target.id);
      const popup = detail(meal[0]);
      document.querySelector('#app').appendChild(popup);

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
