const homeCounter = () => {
  const home = document.querySelector('.homeCount');
  const totalCards = document.querySelectorAll('.card');

  if (totalCards.length !== 0) {
    home.innerHTML = totalCards.length + 1;
  }
};
export default homeCounter;