import { createElement } from '../render.js';

const createProfileTemplate = () => (`
  <section class="header__profile profile"></section>`
);

export default class ProfileView {
  getTemplate() {
    return createProfileTemplate();
  }

  getElement () {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
