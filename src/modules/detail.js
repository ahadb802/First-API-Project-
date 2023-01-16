const detail = (data) => {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('pop-up');
  popupContainer.innerHTML = `
    <div class="image-container">
        <img src="${data.strMealThumb}" alt="" />
      </div>
      <button class="btn-close">
        <i class="fa-solid fa-xmark fa-2x"></i>
      </button>
      <h3>${data.strMeal}</h3>

      <div class="meal-info">
        <div class="info">
          <h5>Category</h5>
          <span>${data.strCategory}</span>
        </div>
        <div class="info">
          <h5>Area</h5>
          <span>${data.strArea}</span>
        </div>
        <div class="info">
          <h5>Source</h5>
          <span>
            <a href="${data.strSource}">click</a>
          </span>
        </div>
        <div class="info">
          <h5>YouTube Video</h5>
          <span>
            <a href="${data.strYoutube}">click</a>
          </span>
        </div>
        <div class="info info-detail">
          <details>
            <summary>Instruction</summary>
            ${data.strInstructions}
          </details>
        </div>
        <div class="info info-detail">
          <details>
            <summary>Measurement</summary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            officia optio. Soluta eum commodi, vero quidem iste sed ullam
            accusantium. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Minus id et quae amet numquam voluptatem laudantium hic natus
            quisquam beatae, commodi, animi nulla reprehenderit aspernatur
            expedita nihil fuga itaque. Dolores.
          </details>
        </div>
      </div>
      <div class="comments">
        <h4>Comments (<span class="comment-count"></span>)</h4>
        <ul class="comment-list">
        </ul>
        <div class="add-comment-form">
          <h4>Add Comment</h4>
          <form action="#" class="comment-form">
            <input type="text" name="username" placeholder="Your Name" required/>
            <textarea name="comment" placeholder="Your Insights" required></textarea>
            <button type="submit" class="btn">Comment</button>
          </form>
        </div>
      </div>
  `;

  return popupContainer;
};

export default detail;
