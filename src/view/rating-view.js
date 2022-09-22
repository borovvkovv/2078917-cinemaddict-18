import {createElement} from '../render.js';

const createRatingTemplate = () => (`
<p class="profile__rating">Movie Buff</p>`
);

export default class RatingView {
  getTemplate () {
    return createRatingTemplate();
  }

  getElement () {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement () {
    this.element = null;
  }
}
