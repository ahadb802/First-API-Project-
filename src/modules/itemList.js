import card from './card.js';
import fetchMealAPI from './fetchMealAPI.js';

const itemList = async () => {
  const cardContainer = document.querySelector('.cardContainer');
  const meals = await fetchMealAPI();
  console.log(meals);
  meals.forEach((meal) => {
    cardContainer.appendChild(card(meal));
  });
};

export default itemList;
