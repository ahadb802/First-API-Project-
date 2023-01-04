import microverseLogo from '../../murple_logo.png';

const card = () => {
  const cardContainer = document.querySelector('.cardContainer');
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerHTML = `
    <img src=${microverseLogo} alt="food-one" />
    <div class="card__body">
      <div class="card__body__top">
        <span>Name of item</span>
        <span>like button</span>
      </div>
      <div class="card__body__buttons">
        <button class="btn" id="comments">Comments</button>
        <button class="btn" id="reservations">Reservations</button>
      </div>
    </div>
  `;
  cardContainer.appendChild(cardElement);
};

export default card;