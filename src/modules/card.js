const card = (meal) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerHTML = `
    <img src=${meal.strMealThumb} alt="food-one" />
    <div class="card__body">
      <div class="card__body__top">
        <span>${meal.strMeal}</span>
        <span class="like-icon">
          <i class="fa-regular fa-heart fa-2x"></i>
        </span>
      </div>
      <div class="card__body__buttons">
        <button class="btn comment-btn" id="${meal.idMeal}">Comments</button>
      </div>
    </div>
  `;
  return cardElement;
};

export default card;